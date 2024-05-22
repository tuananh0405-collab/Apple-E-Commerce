const SubscribeSection = () => {
  return (
    
    <div class="bg-blue-100 py-20 sm:px-6 px-4 rounded-md mt-32">
    <div class="max-w-4xl w-full mx-auto text-center">
      <h2 class="md:text-4xl text-3xl font-extrabold">Subscribe Our Newsletter</h2>
      <p class="mt-6">Stay updated with our latest news and exclusive offers. Join our community today!</p>
      <div class="mt-10 bg-white flex items-center p-2 max-w-xl mx-auto rounded-2xl border border-gray-300">
        <input type="email" placeholder="Enter your email"
          class="w-full bg-transparent py-4 px-2 border-none outline-none" />
        <button class="px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800">
          Subscribe
        </button>
      </div>
    </div>
  </div>
  )
}
export default SubscribeSection