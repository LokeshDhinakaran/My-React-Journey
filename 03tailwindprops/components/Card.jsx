import React from 'react'

function Card() {
  return (
    <div>
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2017/03/27/15/20/factory-2179347__340.jpg" alt="" width="384" height="512"/>
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
            <p class="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatibus illo natus aperiam veritatis, provident fugiat alias cumque magni eum eaque ea deserunt dolor magnam.
            </p>
            </blockquote>
            <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
                Sarah Dayan
            </div>
            <div class="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
            </div>
            </figcaption>
        </div>
        </figure>
    </div>
  )
}

export default Card