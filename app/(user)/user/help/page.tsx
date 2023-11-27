import RequestHelpForm from './RequestHelpForm'

const HelpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 my-20">
      <div>
        <h2 className='text-2xl'>Get Support</h2>
      </div>
      <div className="w-full rounded-lg p-6 shadow-xl max-w-md">
        <RequestHelpForm/>
      </div>
    </div>
  )
}

export default HelpPage