const tools = [
  {
    name: "ServiceM8",
    description: "Job management for tradies",
    link: "https://www.amazon.com/dp/B01M8L5Z3Y?tag=techtools-22"
  },
  {
    name: "Fergus",
    description: "Trade business management",
    link: "https://www.amazon.com/dp/B07X4F7JZG?tag=techtools-22"
  },
  {
    name: "Buildxact",
    description: "Construction quoting & management",
    link: "https://www.amazon.com/dp/B08CFSZLQ4?tag=techtools-22"
  }
];

export default function Tools() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Featured Tools</h1>
      <ul>
        {tools.map((tool, index) => (
          <li key={index}>
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
            <a href={tool.link} target="_blank" rel="noopener noreferrer">View Tool</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
