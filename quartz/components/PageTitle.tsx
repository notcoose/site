import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

//brute forced adding email in casue can't be bothered to add to config n stuff

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const titleWords = title.split(" ")

  return (
    <div>
      <h2 class={classNames(displayClass, "page-title")}>
        <a href={baseDir}>
          {titleWords.map((word, index) => (
            <span key={index}>
              {word}
              {index < titleWords.length - 1 && <br />}
            </span>
          ))}
        </a>
      </h2>
      <h4 class="email">
        <a href="mailto:markusgperez@gmail.com">
          markusgperez@gmail.com
        </a>
      </h4>
    </div>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
}

.email {
  margin: 0;
  font-size: 1rem;
}

`

export default (() => PageTitle) satisfies QuartzComponentConstructor
