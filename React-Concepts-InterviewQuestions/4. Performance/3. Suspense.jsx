
//      What is Suspense ??
//          Suspense lets you "wait" for some part of your app to load before rendering.


        <React.Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </React.Suspense>



//      ***  Shows fallback UI till the component loads.  ***