export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start items-center">
            <img src="./wellness-logo.png" alt="" height={40} width={40} />
            <h2 className="text-lg font-bold mx-4">Wellness Retreat</h2>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
