export default function Modal({children}) {
  return(
    <div className="fixed top-0 left-0 w-full h-full bg-black/50">
      <div className="p-12 bg-white mx-auto my-52 max-w-xs sm:max-w-md rounded-lg">
        {children}
      </div>
    </div>
  )
}
