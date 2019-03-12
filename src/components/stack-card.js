import React from "react"

const StackCard = ({ node }) => (
  <div className="card is-tool-card">
    <div className="card-content has-text-centered">
      <div className="is-size-4 has-margin-top-5">
        <a href={`/${node.parent.name}`}>
          {node.frontmatter.title}
        </a>
      </div>
      <p className="has-margin-top-10">
        {node.frontmatter.description}
      </p>
      <p className="has-margin-top-10">
        <span>by</span>
        {node.frontmatter.contributors.map(contributor => <a href={contributor.url} key={contributor.name}>&nbsp; @{contributor.name}</a>)}
      </p>
      <div className="tags is-centered has-margin-top-20">
        {node.fields.stackShareTools.slice(0, 3).map((tool) =>
          <a className="tag is-link" key={tool.fullName} href={tool.url}>{tool.name}</a>
        )}
        {node.fields.gitHubTools.slice(0, 3).map((tool) =>
          <a className="tag" key={tool.name} href={tool.url}>{tool.name}</a>
        )}
      </div>
    </div>
  </div>
);

export default StackCard