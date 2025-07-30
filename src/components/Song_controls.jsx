import React from 'react'
import { Slider, LinearProgress } from '@mui/material';
import { Play, SkipForward, SkipBack, Volume2 } from 'lucide-react';

export const Song_controls = () => {
    return (
        <div className="min-w-4xl h-20 fixed bottom-16 left-1/2 transform -translate-x-1/2 bg-[#111] text-white px-6 py-4 rounded-full shadow-lg flex justify-between items-center gap-6 z-50">

            {/* song info */}
            <div className="w-38">
                <div className='flex w-max'>
                    <img className='w-12 aspect-square rounded-full mr-8' src="https://mir-s3-cdn-cf.behance.net/projects/404/4f9c4f202117031.6680655cee4ea.jpg" alt="Album_cover" />
                    <div className='flex flex-col gap-y-2'>
                        <songname>---</songname>
                        <artistname>----------</artistname>
                    </div>
                </div>
            </div>

            {/* Song Control Buttons */}
            <div className='flex flex-col items-center'>
                <playback className="flex items-center gap-x-6">
                    <button className="hover:scale-110 transition cursor-pointer"><SkipBack /></button>
                    <button className="hover:scale-110 transition text-xl cursor-pointer"><Play size={35}/></button>
                    <button className="hover:scale-110 transition cursor-pointer"><SkipForward /></button>
                </playback>

                <LinearProgress variant="determinate" value={50} color='success'/>
                
            </div>

            {/* Volume Slider */}
            <div className="flex items-center gap-2 w-48">
                <Slider
                    size="small"
                    defaultValue={70}
                    aria-label="Volume"
                    valueLabelDisplay="auto"
                />
                <Volume2 />
            </div>
        </div>
    );
}
