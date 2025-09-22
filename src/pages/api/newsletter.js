export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email } = req.body;

  if (!email) return res.status(400).json({ message: 'Email is required' });

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY, // set in your .env.local
      },
      body: JSON.stringify({
        email: email,
        listIds: [YOUR_LIST_ID], // replace with your Brevo list ID
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ message: errorData.message });
    }

    res.status(200).json({ message: 'Subscribed successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
