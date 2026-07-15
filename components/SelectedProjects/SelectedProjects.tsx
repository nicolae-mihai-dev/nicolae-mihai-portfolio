import { projects } from "@/data/site";
import styles from "./SelectedProjects.module.css";

type ProjectIconName =
  | "layout"
  | "dashboard"
  | "database"
  | "cms"
  | "cart"
  | "network";

const projectPresentation: Array<{
  accent: string;
  icon: ProjectIconName;
}> = [
  { accent: styles.yellow, icon: "layout" },
  { accent: styles.cyan, icon: "dashboard" },
  { accent: styles.pink, icon: "database" },
  { accent: styles.yellow, icon: "cms" },
  { accent: styles.cyan, icon: "cart" },
  { accent: styles.pink, icon: "network" },
];

function ProjectIcon({ name }: { name: ProjectIconName }) {
  return (
    <svg
      className={styles.projectIconSvg}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {name === "layout" && (
        <>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="8" y1="9" x2="8" y2="20" />
        </>
      )}
      {name === "dashboard" && (
        <>
          <line x1="5" y1="20" x2="5" y2="12" />
          <line x1="12" y1="20" x2="12" y2="5" />
          <line x1="19" y1="20" x2="19" y2="9" />
          <line x1="3" y1="20" x2="21" y2="20" />
        </>
      )}
      {name === "database" && (
        <>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </>
      )}
      {name === "cms" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="10" y1="9" x2="10" y2="21" />
          <rect x="13" y="12" width="5" height="4" rx="1" />
        </>
      )}
      {name === "cart" && (
        <>
          <circle cx="9" cy="20" r="1.5" />
          <circle cx="18" cy="20" r="1.5" />
          <path d="M3 4h2l2.2 10.5h10.9L21 8H6" />
        </>
      )}
      {name === "network" && (
        <>
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="18" cy="18" r="2.5" />
          <line x1="8.2" y1="10.8" x2="15.7" y2="7.2" />
          <line x1="8.2" y1="13.2" x2="15.7" y2="16.8" />
        </>
      )}
    </svg>
  );
}

function ProjectLinks({ links }: { links: (typeof projects)[number]["links"] }) {
  return (
    <nav className={styles.projectLinks} aria-label="Project links">
      {links.map((link) => {
        const content = (
          <>
            {link.label}
            <span aria-hidden="true">↗</span>
          </>
        );

        return link.href ? (
          <a className={styles.projectLink} href={link.href} key={link.label}>
            {content}
          </a>
        ) : (
          <span className={styles.projectLink} key={link.label}>
            {content}
          </span>
        );
      })}
    </nav>
  );
}

export function SelectedProjects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={`container ${styles.inner}`}>
        <div className={styles.heading}>
          <h2 className={styles.label}>Selected Work</h2>
          <div>
            <h3 className={styles.title}>
              Self-initiated builds with{" "}
              <span className={styles.titleHighlight}>real-world structure.</span>
            </h3>
            <p className={styles.intro}>
              These projects are built to show how I approach layout,
              implementation, content structure, CMS editing and technical
              handoff - with live previews, repositories and clear build notes.
            </p>
          </div>
        </div>

        <div className={styles.projectsList}>
          {projects.map((project, index) => {
            const presentation = projectPresentation[index];
            const isActive = project.status === "In progress";

            return (
              <article
                className={`${styles.projectRow} ${presentation.accent}`}
                key={project.title}
              >
                <div className={styles.projectHeading}>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`${styles.projectStatus} ${isActive ? styles.projectStatusActive : ""}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className={styles.projectTitle}>
                    <span className={styles.projectIcon} aria-hidden="true">
                      <ProjectIcon name={presentation.icon} />
                    </span>
                    <h3>{project.title}</h3>
                  </div>
                </div>

                <div className={styles.projectContent}>
                  <p>{project.description}</p>

                  <ul className={styles.projectStack} aria-label="Technologies used">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>

                <ProjectLinks links={project.links} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
