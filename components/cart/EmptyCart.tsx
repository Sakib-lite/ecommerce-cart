import React from 'react'
import { useRouter } from 'next/router';



export default function EmptyCart() {

    const router = useRouter();
    return (
       
             
<div className="relative">
    <div className="h-screen w-full z-10 inset-0 overflow-y-auto">
        <div className="absolute w-full h-full inset-0 bg-gray-500 opacity-75">
        </div>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            </span>
            <div className="inline-block relative overflow-hidden transform transition-all sm:align-middle sm:max-w-lg" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div>
                    <div className="rounded-lg p-8 bg-gray-200 shadow">
                        <div className="bg-white dark:bg-gray-800 ">
                            <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                             

{/* error block */}

                            <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 p-6">
        <div className="flex items-center justify-center w-12 bg-red-500">
            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"/>
            </svg>
        </div>
        
        <div className="px-2 md:py-1 -mx-3">
            <div className="mx-3">
                <span className="font-semibold text-red-500 dark:text-red-400 text-xs md:text-lg">Sorry</span>
                <p className="md:text-sm text-xs text-gray-600 dark:text-gray-200 ">Your cart is empty</p>
            </div>
        </div>
    </div>



                                <div className="lg:mt-0 lg:flex-shrink-0">
                                    <div className="mt-12 inline-flex rounded-md shadow">
                                        <button type="button" className="py-2 px-2  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={()=>router.replace('/all-products')}>
                                          Start Shopping
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

      
    )
}
