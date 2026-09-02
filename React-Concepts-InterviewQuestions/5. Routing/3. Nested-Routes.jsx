
//      What are Nested Routes ??
//          Nested routes are routes inside another route.


        <Route path="/dashboard" element={<Dashboard />} >
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
        </Route>


//      ***  Child routes render inside parent layout.   ***