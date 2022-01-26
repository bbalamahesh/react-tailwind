import React from 'react'
import { XIcon } from '@heroicons/react/outline'
import Placeholder from './../../assets/images/No-Image-Placeholder.png'
export default function Movies({ title, release_date, image, overview, vote_average, original_title }) {

    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <li className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                        src={"https://image.tmdb.org/t/p/w500/" + image != "https://image.tmdb.org/t/p/w500/"+null ? "https://image.tmdb.org/t/p/w500/" + image : Placeholder}
                        alt={title}
                        className="cursor-pointer w-full h-full object-center object-cover group-hover:opacity-75"
                        onClick={() => setShowModal(true)}
                    />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{release_date}</p>
            </li>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {title}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 inline-grid sm:grid-cols-2">
                                    <div className="w-full pr-4">
                                        <img className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8" src={"https://image.tmdb.org/t/p/w500/" + image != "https://image.tmdb.org/t/p/w500/"+null ? "https://image.tmdb.org/t/p/w500/" + image : Placeholder} alt="" />
                                    </div>
                                    <div className="my-4 text-blueGray-500 text-lg leading-relaxed mt-0">
                                        {/* <h2 className="text-2xl font-semibold pb-2">{title}</h2> */}
                                        <p className='pb-2'><strong>Orginal Title: </strong><span>{original_title}</span></p>
                                        <p className="pb-2">{overview}</p>
                                        <p><strong>Release Date: </strong>{release_date}</p>
                                        <p><strong>Rating: </strong>{vote_average}/10</p>
                                        <p><button className="mt-5 text-white bg-indigo-600 hover:bg-indigo-700 btn inline-block px-6 py-2 border-2 border-blue-600 font-medium text-xs leading-tight uppercase rounded  focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button">Watch Now</button></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}
