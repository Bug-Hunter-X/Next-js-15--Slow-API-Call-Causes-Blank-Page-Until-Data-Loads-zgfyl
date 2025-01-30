```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
function About() {
  // Simulate a slow API call
  const data = fetch('/api/data')
  .then(res => res.json())
  .catch(err => console.error(err));

  return (
    <div>
      <h1>About Page</h1>
      {/* Show data if it's available  */}
      {data && <p>Data: {JSON.stringify(data)}</p>}
    </div>
  );
}

export default About;
```
```javascript
// pages/api/data.js
// Simulates an API call with a 2 second delay
export default async function handler(req, res) {
  await new Promise(resolve => setTimeout(resolve, 2000));
  res.status(200).json({ message: 'Data from API' });
}
```