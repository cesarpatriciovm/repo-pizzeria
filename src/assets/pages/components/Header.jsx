function Header() {
  return (
    <section className="h-2/6 bg-center bg-no-repeat bg-[url('../public\Header.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">¡Pizzería Mamma Mía!</h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">¡Tenemos las mejores pizzas que podrás encontrar!</p>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 w-3/4" />
        </div>
    </section>
  );
}

export default Header;