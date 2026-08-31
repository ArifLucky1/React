
//  What are Keys in React ??
        // Keys help React identify which items have changed, are added, or are removed.



        {items.map(item => (
            <li key={item.id}>
                {item.name}
                </li>
        ))}


//      ***  Key should be unique and stable.  ***