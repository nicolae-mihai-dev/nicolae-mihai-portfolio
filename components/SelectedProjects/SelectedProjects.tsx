import { projects } from "@/data/site";
import styles from "./SelectedProjects.module.css";

const showPlannedResources = true;

function ProjectLinks({
  links,
  projectTitle,
}: {
  links: (typeof projects)[number]["links"];
  projectTitle: string;
}) {
  const hasAvailableLinks = links.some((link) => link.href);

  if (!hasAvailableLinks && !showPlannedResources) {
    return null;
  }

  return (
    <ul className={styles.projectLinks} aria-label={`${projectTitle} resources`}>
      {links.map((link) => {
        const content = (
          <>
            <span>{link.label}</span>
            <span className={styles.linkArrow} aria-hidden="true">
              {"\u2197"}
            </span>
          </>
        );

        if (!link.href) {
          if (!showPlannedResources) {
            return null;
          }

          return (
            <li key={link.label}>
              <span
                aria-label={`${link.label} — link coming soon`}
                className={`${styles.projectLink} type-action`}
              >
                {content}
              </span>
            </li>
          );
        }

        const isExternal = link.href.startsWith("http");

        return (
          <li key={link.label}>
            <a
              className={`${styles.projectLink} type-action`}
              href={link.href}
              rel={isExternal ? "noopener noreferrer" : undefined}
              target={isExternal ? "_blank" : undefined}
            >
              {content}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function SelectedProjects() {
  return (
    <section
      className={styles.projects}
      aria-labelledby="selected-projects-title"
      id="projects"
    >
      <div className={`container ${styles.inner}`}>
        <header className={styles.heading}>
          <span
            className={`${styles.label} type-label type-label--accent type-label--ruled type-label--centered`}
          >
            Selected Work
          </span>

          <h2
            className={`${styles.title} type-section-title`}
            id="selected-projects-title"
          >
            Current work and focused builds in development<span>.</span>
          </h2>

          <p className={`${styles.intro} type-section-copy`}>
            A transparent view of the portfolio and focused builds currently in
            development. Each item is marked by its real stage; public links
            appear only when there is something useful to review.
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

                <ProjectLinks links={project.links} projectTitle={project.title} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
