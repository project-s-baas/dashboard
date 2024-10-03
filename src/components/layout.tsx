import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import {
  Home,
  Users2,
  LineChart,
  Settings,
  Database,
  Hexagon,
  Shield,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './language-switcher';
import { useTranslation } from 'react-i18next';
import { ModeToggle } from './mode-toggle';

const Layout: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className='flex flex-col h-screen'>
      <header className='text-white px-4 py-2 fixed top-0 left-14 h-14 right-0 z-10 border-b bg-background flex justify-between items-center'>
        <h1 className='text-lg font-bold'>Hexabase</h1>
        <div className='flex items-center gap-2'>
          <LanguageSwitcher />
          <ModeToggle />
        </div>
      </header>
      <div className='flex flex-1 pt-14'>
        <aside className='fixed inset-y-0 left-0 z-10 w-14 flex-col border-r bg-background flex'>
          <nav className='flex flex-col items-center gap-4 px-2 py-4'>
            <Link
              to='#'
              className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'
            >
              <Hexagon className='h-9 w-9 transition-all group-hover:scale-110 text-primary' />
              <span className='sr-only'>Icon</span>
            </Link>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Link
                  to='/'
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                    location.pathname === '/' &&
                      'bg-accent text-accent-foreground'
                  )}
                >
                  <Home className='h-5 w-5' />
                  <span className='sr-only'>{t('layout.home')}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>{t('layout.home')}</TooltipContent>
            </Tooltip>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Link
                  to='/database'
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                    location.pathname === '/database' &&
                      'bg-accent text-accent-foreground'
                  )}
                >
                  <Database className='h-5 w-5' />
                  <span className='sr-only'>{t('layout.database')}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>
                {t('layout.database')}
              </TooltipContent>
            </Tooltip>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Link
                  to='/security'
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                    location.pathname === '/security' &&
                      'bg-accent text-accent-foreground'
                  )}
                >
                  <Shield className='h-5 w-5' />
                  <span className='sr-only'>{t('layout.security')}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>
                {t('layout.security')}
              </TooltipContent>
            </Tooltip>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Link
                  to='/auth'
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                    location.pathname === '/auth' &&
                      'bg-accent text-accent-foreground'
                  )}
                >
                  <Users2 className='h-5 w-5' />
                  <span className='sr-only'>{t('layout.auth')}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>{t('layout.auth')}</TooltipContent>
            </Tooltip>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Link
                  to='/analytics'
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                    location.pathname === '/analytics' &&
                      'bg-accent text-accent-foreground'
                  )}
                >
                  <LineChart className='h-5 w-5' />
                  <span className='sr-only'>{t('layout.analytics')}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>
                {t('layout.analytics')}
              </TooltipContent>
            </Tooltip>
          </nav>
          <nav className='mt-auto flex flex-col items-center gap-4 px-2 py-4'>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <Link
                  to='/settings'
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                    location.pathname === '/settings' &&
                      'bg-accent text-accent-foreground'
                  )}
                >
                  <Settings className='h-5 w-5' />
                  <span className='sr-only'>{t('layout.settings')}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>
                {t('layout.settings')}
              </TooltipContent>
            </Tooltip>
          </nav>
        </aside>
        <main className='flex-1 ml-14'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
