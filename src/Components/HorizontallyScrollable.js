import { useRef } from "react"

function HorizontallyScrollable({children, className = ''}) {
    const scrollref = useRef();

    const handleMouseDown = (event) => {
        const oldX = event.pageX;
        const scrollLeft = scrollref.current.scrollLeft;
        
        const handleMouseMove = (event) => {
            const newX = event.pageX;
            const offset = newX - oldX;

            scrollref.current.scrollLeft = scrollLeft - offset
        }

        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }

  return (
    <div 
    className={className} 
    ref={scrollref} 
    onMouseDown={handleMouseDown}
    >
        {children}
    </div>
  )
}

export default HorizontallyScrollable