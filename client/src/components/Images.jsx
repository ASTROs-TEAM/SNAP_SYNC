/* eslint-disable react/prop-types */
import Image from './Image'
import { saveAs } from 'file-saver'

import img from '../assets/img/Img-placeholder.png'
import { useEffect, useState } from 'react'
const Images = (props) => {
  const [list, setList] = useState([])

  useEffect(() => {
    setList(props.array || props.images || [])
  }, [props.array, props.images])

  const handleDownload = (path) => {
    console.log('Path', path)
    saveAs(path, 'image.jpg')
  }

  return (
    <div className='my-4 ml-10 p-3 px-14'>
      <h2 className=' h2-semibold text-center m-4 pb-14'>Your Images</h2>
      <div className='flex flex-wrap gap-4'>
        {list.map((item, i) => {
          return (
            <div key={i} className='flex-center gap-1 flex-col'>
              <Image url={item} styles='h-72  rounded-xl' />
              {/* <div
                className={`h-50 w-50 rounded-xl bg-auto bg-[url(${
                  item || img
                })]`}
                src={item || img}
              /> */}
              {/* <p>{item}</p> */}
              {props.download && (
                <button className='btn' onClick={() => handleDownload(item)}>
                  Download
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Images
