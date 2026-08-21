import { projects } from "@/data/site";
import styles from "./SelectedProjects.module.css";

function ProjectLinks({
  links,
}: {
  links: (typeof projects)[number]["links"];
}) {
  return (
    <nav className={styles.projectLinks} aria-label="Project links">
      {links.map((link) => {
        const content = (
          <>
            <span>{link.label}</span>
            <span className={styles.linkArrow} aria-hidden="true">
              ↗
            </span>
          </>
        );

        if (!link.href) {
          return (
            <span className={`${styles.projectLink} type-action`} key={link.label}>
              {content}
            </span>
          );
        }

        const isExternal = link.href.startsWith("http");

        return (
          <a
            className={`${styles.projectLink} type-action`}
            href={link.href}
            key={link.label}
            rel={isExternal ? "noopener noreferrer" : undefined}
            target={isExternal ? "_blank" : undefined}
          >
            {content}
          </a>
        );
      })}
    </nav>
  );
}

export function SelectedProjects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={`container ${styles.inner}`}>
        <header className={styles.heading}>
          <span className={`${styles.label} type-label type-label--accent`}>
            Selected Work
          </span>

          <h2 className={`${styles.title} type-section-title`}>
            Products built around real functionality and production-quality
            implementation<span>.</span>
          </h2>

          <p className={`${styles.intro} type-section-copy`}>
            Web applications, digital products and CMS implementations built
            around maintainable architecture, performance and real product
            requirements.
          </p>
        </header>

        <div className={styles.projectsList}>
          {projects.map((project, index) => {
            const isActive = project.status === "In progress";

            return (
              <article className={styles.projectRow} key={project.title}>
                <div className={styles.projectHeading}>
                  <div className={styles.projectMeta}>
                    <span className={`${styles.projectNumber} type-index`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`${styles.projectStatus} type-action ${
                        isActive ? styles.projectStatusActive : ""
                      }`}
                    >
                      {isActive && (
                        <span className={styles.statusDot} aria-hidden="true" />
                      )}

                      {project.status}
                    </span>
                  </div>

                  <h3 className={`${styles.projectTitle} type-card-title`}>
                    {project.title}
                  </h3>
                </div>

                <div className={styles.projectContent}>
                  <p className="type-body">{project.description}</p>

                  <ul
                    className={styles.projectStack}
                    aria-label="Technologies used"
                  >
                    {project.tags.map((tag) => (
                      <li className="type-tag" key={tag}>
                        {tag}
                      </li>
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
