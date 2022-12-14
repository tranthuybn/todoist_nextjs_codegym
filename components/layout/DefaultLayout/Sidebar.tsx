import { VscAdd, VscChevronDown } from 'react-icons/vsc';
import { useState } from 'react';

import AddProject from '~/components/AddProject';
import MainProjects from '~/components/MainProjects';
import Projects from '~/components/Projects';
import Link from 'next/link';
function Sidebar(): JSX.Element {
  const [showProjects, setShowProjects] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);
  return (
    <div className="sidebar">
      <MainProjects />
      <div className="sidebar__middle">
        <h2>
          <Link href="/app/projects">Projects</Link>
        </h2>

        <div>
          <button onClick={() => setShowAddProject(!showAddProject)}>
            <VscAdd />
          </button>
          <button
            className={showProjects ? 'show-projects' : 'hidden-projects'}
            onClick={() => setShowProjects(!showProjects)}
          >
            <VscChevronDown />
          </button>
        </div>
      </div>
      <div>{showProjects && <Projects />}</div>
      {showAddProject && (
        <AddProject showAddProject={showAddProject} setShowAddProject={setShowAddProject} />
      )}
    </div>
  );
}

export default Sidebar;
