export default function Banner() {
    return (
        <div className='row banner bg-primary rounded me-3 my-3'>
            <div className="col-12 d-flex justify-content-between align-items-center">
                <div className="banner-text py-3">
                    <p className='m-0 fs-6 text-white'>Big news! We're excited to announce a brand new product.</p>
                </div>
                <div className="cls-banner p-3">
                    <span>
                        <i class="fa-solid fa-xmark text-white m-0 fs-4"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}
