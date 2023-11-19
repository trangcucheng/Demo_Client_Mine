import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import socketIOClient, { Socket } from 'socket.io-client';
import { ConfigProvider, notification } from 'antd';
import { HelmetProvider } from 'react-helmet-async';
import deDe from 'antd/lib/locale/de_DE';
import enUS from 'antd/lib/locale/en_US';
import GlobalStyle from './styles/GlobalStyle';
import 'typeface-montserrat';
import 'typeface-lato';
import { AppRouter } from './components/router/AppRouter';
import { useLanguage } from './hooks/useLanguage';
import { useAutoNightMode } from './hooks/useAutoNightMode';
import { usePWA } from './hooks/usePWA';
import { useThemeWatcher } from './hooks/useThemeWatcher';
import { useAppSelector } from './hooks/reduxHooks';
import { themeObject } from './styles/themes/themeVariables';

const host = 'http://localhost:3000';

const App: React.FC = () => {
  const socketRef = useRef<Socket | null>(null);
  const { language } = useLanguage();
  const theme = useAppSelector((state) => state.theme.theme);

  usePWA();

  useAutoNightMode();

  useThemeWatcher();
  useEffect(() => {
    socketRef.current = socketIOClient(host);
    socketRef.current.on('connect', () => {
      console.log('connected to server');
    });
    if (socketRef.current) {
      socketRef.current.on('confirm_request', (data) => {
        console.log(data);
        notification.success({ message: `Yêu cầu đặt xe đã được phê duyệt!` });
      });
    }
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [socketRef]);

  return (
    <>
      <meta name="theme-color" content={themeObject[theme].primary} />
      <GlobalStyle />
      <HelmetProvider>
        <ConfigProvider locale={language === 'en' ? enUS : deDe}>
          <AppRouter />
        </ConfigProvider>
      </HelmetProvider>
    </>
  );
};

export default App;
