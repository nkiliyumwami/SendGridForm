// app/page.js

import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <ContactForm />
    </div>
  );
}