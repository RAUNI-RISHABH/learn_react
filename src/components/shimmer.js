const Shimmer = () => {
    return (
        <div className="space-x-4 p-4 animate-pulse">
        {/* <!-- Image shimmer --> */}
        <div className="w-44 h-32 bg-gray-300 rounded-lg"></div>
        
        {/* <!-- Text and content shimmer --> */}
        <div className="space-y-4 py-1">
          {/* <!-- Title shimmer --> */}
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          
          {/* <!-- Subtitle shimmer --> */}
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          
          {/* <!-- Additional shimmer lines --> */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    )
}

export default Shimmer;