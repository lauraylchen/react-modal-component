export default function Modal({children, handleClose}) {
  return(
    <div className="fixed top-0 left-0 w-full h-full bg-neutral/50">
      <div className="relative p-12 bg-base-100 mx-auto my-52 max-w-xs sm:max-w-md rounded-lg">
        {children}
        <div className="absolute -top-3 -right-3">
          <button className="btn btn-circle btn-sm" onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      </div>
    </div>
  )
}
