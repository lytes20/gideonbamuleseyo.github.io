import cn from 'classnames';
import Link from 'next/link';
import useDelayedRender from 'use-delayed-render';
import { useState, useEffect } from 'react';
import styles from 'styles/mobile-menu.module.css';
import { routes } from 'lib/constants';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(isMenuOpen, {
    enterDelay: 20,
    exitDelay: 300,
  });

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  let resumeTransitionDelay = routes[routes.length - 1]['transitionDelay'];
  resumeTransitionDelay = resumeTransitionDelay + 50;
  return <>
    <button className={cn(styles.burger, 'visible md:hidden')} aria-label="Toggle menu" type="button" onClick={toggleMenu}>
      <MenuIcon data-hide={isMenuOpen} />
      <CrossIcon data-hide={!isMenuOpen} />
    </button>
    {isMenuMounted && (
      <ul className={cn(styles.menu, 'flex flex-col absolute bg-gray-100 dark:bg-gray-900', isMenuRendered && styles.menuRendered)}>
        {routes.map(({ name, path, transitionDelay }) => (
          <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: `${transitionDelay}ms` }}
            key={name}
          >
            <Link href={path} className="flex w-auto pb-4">
              {name}
            </Link>
          </li>
        ))}
        <li
          className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
          style={{ transitionDelay: `${resumeTransitionDelay}ms` }}
        >
          <a target="_blank" rel="noopener noreferrer" href="https://gideonbamuleseyo.vercel.app/GideonBamuleseyoResume.pdf" className="flex w-auto pb-4">
            Resume
          </a>
        </li>
      </ul>
    )}
  </>;
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg className="h-5 w-5 absolute text-gray-900 dark:text-gray-100" width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <path d="M2.5 7.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 12.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
