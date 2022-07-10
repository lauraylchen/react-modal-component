export default function Modal() {
  return(
    <div className="fixed top-0 left-0 w-full h-full bg-black/50">
      <div className="p-14 bg-white mx-auto my-52 max-w-xs sm:max-w-md rounded-lg">
        <h2 className="text-2xl font-bold pb-3">10% Off Coupon Code!</h2>
        <p className="italic">Use the code <strong className="not-italic">NINJA10</strong> at the checkout.</p>
      </div>
    </div>
  )
}
