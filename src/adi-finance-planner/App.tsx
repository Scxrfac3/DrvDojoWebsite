import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppProvider } from './hooks/useApp';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { AddLesson } from './components/AddLesson';
import { AddExpense } from './components/AddExpense';
import { AddMileage } from './components/AddMileage';
import { GoalsPage } from './components/Goals';
import { SettingsPage } from './components/Settings';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-lesson" element={<AddLesson />} />
            <Route path="/add-expense" element={<AddExpense />} />
            <Route path="/add-mileage" element={<AddMileage />} />
            <Route path="/goals" element={<GoalsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </Layout>
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: 'rgba(15, 23, 42, 0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#f43f5e',
                secondary: '#fff',
              },
            },
          }}
        />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
