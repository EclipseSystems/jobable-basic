export function Profile() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 text-sm space-y-4">
        <div>
          <p>Name</p>
          <p className={'font-bold'}>John Smith</p>
        </div>
        <div>
          <p>Street address</p>
          <p className={'font-bold'}>75 Robinson Road</p>
        </div>
        <div>
          <p>Suburb</p>
          <p className={'font-bold'}>Nundah</p>
        </div>
        <div>
          <p>State</p>
          <p className={'font-bold'}>Queensland</p>
        </div>
        <div className="row-start-2">
          <p>Postcode</p>
          <p className={'font-bold'}>4012</p>
        </div>
        <div className="row-start-2">
          <p>Email address</p>
          <a href={'mailto:john.smith7631@gmail.com'}>
            <p className={'font-bold'}>john.smith7631@gmail.com</p>
          </a>
        </div>
        <div className="row-start-2">
          <p>Mobile number</p>
          <p className={'font-bold'}>+61 429457023</p>
        </div>
        <div className="row-start-2">
          <p>Date of birth</p>
          <p className={'font-bold'}>March 14th, 1971</p>
        </div>
      </div>
    </>
  )
}