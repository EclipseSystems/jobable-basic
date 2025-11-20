export function Profile() {
  return (
    <>
      <div className="grid grid-cols-2 border rounded-lg size-auto">
        <div className="col-span-1 border-r p-6">
          <div className="grid grid-cols-2 text-sm">
            <div className="col-span-1 text-right pr-4">
              <p>Name</p>
              <p>Street address</p>
              <p>Suburb</p>
              <p>State</p>
              <p>Postcode</p>
            </div>
            <div className="col-span-1 text-left pl-4 font-bold">
              <p>John Smith</p>
              <p>76 Nowhere Street</p>
              <p>Anyville</p>
              <p>Queensland</p>
              <p>4290</p>
            </div>
          </div>

        </div>
        <div className="col-span-1"></div>
      </div>
    </>
  )
}