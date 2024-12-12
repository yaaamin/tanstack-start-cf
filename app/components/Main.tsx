import React from 'react'

// # TanStack Starter Template
// This is a simple starter template for a project using [TanStack Start](https://tanstack.com/start/latest). 
// It demonstrates how to quickly scaffold a project, set up routes, and manage application state efficiently.

const Main: React.FC = () => {
    return (
        <div>
            <div className="bg-white">
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <a href="https://tanstack.com/start/latest" className="-m-1.5 p-1.5">
                                <span className="sr-only">TanStack</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tanstack.com/_build/assets/logo-color-100w-br5_Ikqp.png"
                                    alt="TanStack Logo"
                                />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="size-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                        <div className=" flex gap-20 ">
                                        <a
                                            href="https://tanstack.com/router/latest/docs/framework/react/examples/start-basic"
                                            className="-mx-3  rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Examples
                                        </a>
                                        <a
                                            href="https://tanstack.com/"
                                            className="-mx-3  rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Tanstack
                                        </a>
                                        <a
                                            href="https://tanstack.com/router/latest/docs/framework/react/start/overview"
                                            className="-mx-3  rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Docs
                                        </a>
                                        <a
                                            href="https://tanstack.com/blog"
                                            className="-mx-3  rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Blog
                                        </a>
                                    </div>
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a
                                href="https://github.com/SH20RAJ/tanstack-start"
                                className="text-sm font-semibold text-gray-900"
                            >
                                Template
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </nav>
                    {/* Mobile menu, show/hide based on menu open state. */}
                    <div className="lg:hidden" role="dialog" aria-modal="true">
                        {/* Background backdrop, show/hide based on slide-over state. */}
                        <div className="fixed inset-0 z-50" />
                        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="https://tanstack.com/start/latest" className="-m-1.5 p-1.5">
                                    <span className="sr-only">TanStack</span>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tanstack.com/_next/static/media/tanstack-logo-full.2a7b3179.svg"
                                        alt="TanStack Logo"
                                    />
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <svg
                                        className="size-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        data-slot="icon"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18 18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <a
                                            href="https://tanstack.com/router/latest/docs/framework/react/examples/start-basic"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Examples
                                        </a>
                                        <a
                                            href="https://tanstack.com/"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Tanstack
                                        </a>
                                        <a
                                            href="https://tanstack.com/router/latest/docs/framework/react/start/overview"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Docs
                                        </a>
                                        <a
                                            href="https://tanstack.com/blog"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Blog
                                        </a>
                                    </div>
                                    <div className="py-6">
                                        <a
                                            href="https://tlinz.com/discord"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Discord
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Announcing our next round of funding.{' '}
                                <a href="https://tanstack.com/blog" className="font-semibold text-indigo-600">
                                    <span className="absolute inset-0" aria-hidden="true" />Read more{' '}
                                    <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                                Build modern apps with TanStack
                            </h1>
                            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
                                Start quickly with TanStack and build powerful and scalable applications using our suite of
                                tools.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="https://tanstack.com/router/latest/docs/framework/react/start/overview"
                                    className="inline-block rounded-lg px-6 py-3 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Get Started
                                </a>
                                <a
                                    href="https://tanstack.com/docs"
                                    className="inline-block rounded-lg px-6 py-3 text-base font-semibold text-gray-900 border border-gray-900 hover:bg-gray-50"
                                >
                                    View Docs
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
