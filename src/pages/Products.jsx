import React from 'react'

const Products = () => {
  return (
    

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-16 py-3">
                    <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="px-6 py-3">
                    Product
                </th>
                <th scope="col" class="px-6 py-3">
                    Qty
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="p-4">
                    <img src="data:image/jpeg;base64,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" class="w-16 md:w-32 max-w-full max-h-full" alt="Drone with Camera"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Drone with Camera
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <button class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <div>
                            <input type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required/>
                        </div>
                        <button class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    $899
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="p-4">
                    <img src="https://target.scene7.com/is/image/Target/GUEST_2b4ad2aa-fd90-4712-9808-d9c5e2161328?qlt=65&fmt=pjpeg&hei=350&wid=350" class="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                   Apple Watch"
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <button class="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <div class="ms-3">
                            <input type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required/>
                        </div>
                        <button class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    $599
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="p-4">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-white-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202752000" class="w-16 md:w-32 max-w-full max-h-full" alt="iPhone 12"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    IPhone 12 
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <button class="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <div class="ms-3">
                            <input type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required/>
                        </div>
                        <button class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    $999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}

export default Products