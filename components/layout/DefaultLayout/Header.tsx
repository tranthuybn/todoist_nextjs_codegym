import Link from 'next/link';
import {
  VscAdd,
  VscInfo,
  VscBell,
  VscHome,
  VscThreeBars,
  VscSearch,
  VscSymbolColor,
} from 'react-icons/vsc';
import { useState } from 'react';
import AddTask from '~/components/AddTask';
import { useThemeValue } from '~/context';
import { themes } from '~/constants';
function Header() {
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  const { setTheme } = useThemeValue();
  const [showThemes, setShowThemes] = useState(false);
  return (
    <header className="header">
      <nav>
        <div className="nav__left">
          <ul>
            <li className="nav__main-item">
              <button>
                <VscThreeBars />
              </button>
            </li>
            <li className="nav__main-item">
              <Link href="/app/projects/today">
                <button>
                  <VscHome />
                </button>
              </Link>
            </li>
            <li className="nav__main-item search">
              <button>
                <span>
                  <VscSearch />
                </span>
                <input type="text" placeholder="" />
              </button>
            </li>
          </ul>
        </div>
        <div className="nav__right">
          <ul>
            <li className="nav__main-item">
              <button onClick={() => setShowQuickAddTask(!showQuickAddTask)}>
                <VscAdd />
              </button>
            </li>
            <li className="nav__main-item">
              <button>
                <VscInfo />
              </button>
            </li>
            <li className="nav__main-item">
              <button>
                <VscBell />
              </button>
            </li>
            <li className="nav__main-item theme">
              <button onClick={() => setShowThemes(!showThemes)}>
                <VscSymbolColor />
              </button>

              {showThemes && (
                <>
                  <span
                    onClick={() => setShowThemes(!showThemes)}
                    className="theme__selection-overlay"
                  ></span>
                  <ul className="theme__selection">
                    {themes.map((theme) => (
                      <li
                        className="theme__item"
                        key={theme.key}
                        onClick={() => {
                          setTheme(`${theme.key}`);
                        }}
                      >
                        {theme.key}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          </ul>
        </div>
      </nav>
      {showQuickAddTask && (
        <>
          <div
            onClick={() => (showQuickAddTask ? setShowQuickAddTask(!showQuickAddTask) : undefined)}
            className="overlay"
          ></div>
          <AddTask
            shouldShowAddTask={false}
            showQuickAddTask={showQuickAddTask}
            setShowQuickAddTask={setShowQuickAddTask}
          />
        </>
      )}
    </header>
  );
}

export default Header;
