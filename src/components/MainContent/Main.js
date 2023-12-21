import React from 'react';
import chatgptIcon from '../../assets/chatgptIcon.png'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Main() {
    // const handleLike = () => {
    //     window.open('https://www.triveous.com/', '_blank');
    // };
    // const handleVisitSite = () => {
    //     window.open('https://www.triveous.com/', '_blank');
    // };
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Shared content',
                    text: 'Check this out!',
                    url: window.location.href,
                });
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            const shareText = encodeURIComponent('Check this out!');
            const shareUrl = encodeURIComponent(window.location.href);

            // WhatsApp
            const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`;

            // Twitter
            const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;

            // Open a popup with the share links
            const popup = window.open(
                `${whatsappUrl}\n${twitterUrl}`,
                'SharePopup',
                'width=600,height=400'
            );

            if (!popup) {
                console.error('Popup blocked. Please allow popups and try again.');
            }
        }
    };
    return (
        <div className='mx-2'>
            <div className="flex justify-between py-2 md:flex-row flex-col ">
                <div className="flex items-center ">
                    <div className="w-20">
                        <img src={chatgptIcon} alt="" />
                    </div>
                    <div className="p-2">
                        <h1 className="font-bold text-lg">ChatGPT</h1>
                        <div className="font-semibold text-gray-600"> by OpenAI</div>
                        <div className="text-gray-600 flex items-center space-x-2"><FaRegHeart size={15} className='mr-2'/>{"700K"} Likes <MdOutlineRemoveRedEye size={20}/><span className='ml-2'>{"1.2M"}Views</span></div>
                    </div>
                </div>
                <div className="flex justify-end items-start flex-wrap space-x-4 m-auto">
                    <a className="lg:px-8 px-4 lg:py-2 py-1 flex items-center text-purple-900 border rounded hover:bg-purple-900 hover:text-white" href="https://www.triveous.com/">
                        
                        <IoBookmarkSharp className="mr-2" />
                        Like
                    </a>
                    <a className="lg:px-8 px-4 lg:py-2 py-1 flex items-center text-purple-900 rounded border hover:bg-purple-900 hover:text-white" href="https://www.triveous.com/">
                        <FaExternalLinkAlt className="mr-2" />
                        Visit site
                    </a>
                    <button className="lg:px-8 px-4 lg:py-2 py-1 flex items-center text-purple-900 rounded border hover:bg-purple-900 hover:text-white" onClick={handleShare}>
                        <CiShare2 className="mr-2" />
                        Share
                    </button>
                </div>
            </div>
            <div className='mt-2'>
                <div className="">
                    <span className="mr-2 cursor-pointer font-semibold">OverView</span>
                    <span className="ml-2 cursor-pointer font-semibold text-purple-900 border-b-4 rounded border-purple-900">
                        AboutOpenAi
                    </span>
                </div>

                <hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="py-2 mt-2 font-roboto text-sm">
                OpenAl is an artificial intelligence research laboratory consisting of a team of world-class researchers and engineers focused on creating and advancing artificial intelligence in a safe and beneficial way for humanity. It was founded in December 2015 by several high-profile individuals in the tech industry, including Elon Musk, Sam Altman, Greg Brockman,and other.OpenAl is dedicated to advancing the field of artificial intelligence through research.
                </div>
            </div>
        </div>
    )
}
