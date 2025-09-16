<form
  action="https://formspree.io/f/myzdarbk"
  method="POST"
  className="max-w-xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md space-y-4"
>
  <input
    type="text"
    name="name"
    placeholder="Full Name"
    className="w-full border p-3 rounded"
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Email Address"
    className="w-full border p-3 rounded"
    required
  />
  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    className="w-full border p-3 rounded"
    required
  />
  <textarea
    name="message"
    placeholder="Tell us why you want to volunteer"
    className="w-full border p-3 rounded h-32"
    required
  ></textarea>
  <button
    type="submit"
    className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 w-full"
  >
    Submit Application
  </button>
</form>
