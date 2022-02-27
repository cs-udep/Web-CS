import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const PostContent = ({content, language}) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
          if (obj.href!=undefined) {
              modifiedText = (<div className='cta'>
                  <Link key={index} href={obj.href} passHref >
                  <span className='span-btn'>{obj.title}</span></Link>
                    <svg className='svg-btn' width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
              </div>  
                )
          }
        }
    
        switch (type) {
            case 'heading-one':
                return <h1 key={index} className='h-1'>{modifiedText.map((item,i)=><React.Fragment key={i}>{item}</React.Fragment>)}</h1>;
            case 'heading-two':
                return <h2 key={index} className='h-2'>{modifiedText.map((item,i)=> <React.Fragment key={i}>{item}</React.Fragment>)}</h2>
            case 'heading-three':
                return <h3 key={index} className="h-3">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'heading-four':
                return <h4 key={index} className="h-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'paragraph':
                return <p key={index} className="p">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'code-block':
                return (<div key={index} className='div-code'>{modifiedText.map((item,i)=> <code key={i} >{item}</code>)}</div>);
            case 'block-quote':
                return <p key={index} className="block-quote">{modifiedText.map((item,i)=><React.Fragment key={i}>{item}</React.Fragment>)}</p>
            case 'image':
                return (
                    <Image
                        key={index}
                        alt={obj.title}
                        height={obj.height/2}
                        width={obj.width/2}
                        src={obj.src}
                    />
                );
            default:
                return modifiedText;
        }
      }; 
    return (
        <div className='postcontent-ctn-all'>
            <div className='postcontent-ctn'>
                {
                    content.raw.children.map((typeObj, index)=>{
                        const children = typeObj.children.map((item,itemIndex)=>getContentFragment(itemIndex,item.text,item))

                        return getContentFragment(index, children, typeObj, typeObj.type)
                    })
                }
            </div>
        </div>
    )
}

export default PostContent;
