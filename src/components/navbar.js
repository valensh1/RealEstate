import React from 'react';

function navbar() {
  const navbarLinks = ['Properties', 'Brokers', 'Sellers', 'Buyers'];
  const myProfileLink = ['My Profile'];
  const myProfileSelling = ['Marketing Center'];
  const myProfileBuying = [
    'Buyer Dashboard',
    'Saved Searches',
    'Saved Listings',
  ];
  const myProfileAccount = [
    'Account Information',
    'Communication Settings',
    'Change Password',
  ];
  const logOut = ['Logout'];

  return (
    <nav>
      <div className="logo">
        <img
          src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMzkuMjggNzIuNDEiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO30uY2xzLTJ7ZmlsbDojMDA1NGE2O30uY2xzLTN7ZmlsbDojY2UyMDI3O308L3N0eWxlPjwvZGVmcz48ZyBpZD0iVGVuLVgtTG9nbyI+PHBhdGggaWQ9IlRlbi1YIiBjbGFzcz0iY2xzLTEiIGQ9Ik0xODYuOTEsMTMyLjN2LTJhMjIsMjIsMCwwLDEtMi4zOS0uMjIsNS40LDUuNCwwLDAsMS0xLjc4LS41NywyLjU5LDIuNTksMCwwLDEtMS4xMi0xLjE1LDQuMTEsNC4xMSwwLDAsMS0uMzktMS45M2gwVjk3LjZIMTg2YTEwLjU0LDEwLjU0LDAsMCwxLDMuMi40LDUuNTYsNS41NiwwLDAsMSwyLjE0LDEuMjksOS4wOSw5LjA5LDAsMCwxLDEuNjcsMi4zNmMuNTEsMSwxLjEsMi4xOSwxLjc3LDMuNjJoMS43NmwtLjgxLTEwLjE1SDE2MS41NWwtLjgxLDEwLjE1aDEuNzZjLjY3LTEuNDMsMS4yNS0yLjYzLDEuNzYtMy42MmE5LjM0LDkuMzQsMCwwLDEsMS42Ny0yLjM2QTUuNiw1LjYsMCwwLDEsMTY4LjA4LDk4YTEwLjQ3LDEwLjQ3LDAsMCwxLDMuMTktLjRIMTc2djI4Ljc5YTQuMjQsNC4yNCwwLDAsMS0uMzgsMS45MywyLjcsMi43LDAsMCwxLTEuMTIsMS4xNSw1LjQ2LDUuNDYsMCwwLDEtMS43OS41NywyMS43OCwyMS43OCwwLDAsMS0yLjM4LjIyaDB2MlptMTguNTMuNDhhMTMuNjcsMTMuNjcsMCwwLDAsNC40MS0uNjQsMTEuNTQsMTEuNTQsMCwwLDAsMy4yNC0xLjY5LDkuNTMsOS41MywwLDAsMCwyLjE5LTIuMzYsMTAuNDgsMTAuNDgsMCwwLDAsMS4yMi0yLjZoMGwtMS4zOS0uNjJhMTEuMTUsMTEuMTUsMCwwLDEtMy4xOSwyLjYyLDEwLDEwLDAsMCwxLTUsMS4xNHEtNC43MSwwLTYuOTMtMi44NmExMi4zMywxMi4zMywwLDAsMS0yLjIyLTcuNzdoMTguNjl2LTEuMzNhMTEuNjgsMTEuNjgsMCwwLDAtLjY3LTQsOC41OSw4LjU5LDAsMCwwLTItMy4yMSw5LjI2LDkuMjYsMCwwLDAtMy4zMS0yLjEzLDEzLDEzLDAsMCwwLTQuNjEtLjc2LDEyLjgyLDEyLjgyLDAsMCwwLTUuMDUsMSwxMS40NSwxMS40NSwwLDAsMC00LDIuODQsMTMuMTgsMTMuMTgsMCwwLDAtMi42Miw0LjM5LDE2LDE2LDAsMCwwLTEsNS42OSwxMy42NCwxMy42NCwwLDAsMCwuODQsNC44MiwxMS40NCwxMS40NCwwLDAsMCwyLjQsMy45MSwxMS4yNCwxMS4yNCwwLDAsMCwzLjg0LDIuNjJBMTMuMjEsMTMuMjEsMCwwLDAsMjA1LjQ0LDEzMi43OFptNS43Ni0xNy4xNkgxOTcuOWE3LjM0LDcuMzQsMCwwLDEsMi4xNS00LjQxLDYuMzgsNi4zOCwwLDAsMSw0LjYyLTEuNjksNy45Myw3LjkzLDAsMCwxLDIuODQuNDcsNS45NCw1Ljk0LDAsMCwxLDIuMDUsMS4zMiw1LjEyLDUuMTIsMCwwLDEsMS4yNCwyLDYuODgsNi44OCwwLDAsMSwuNCwyLjM2Wk0yMjcsMTA2LjU2bC0uMjQsNC42Ny4zMy0uMzRhMTkuNDksMTkuNDksMCwwLDEsMS41NS0xLjM1QTE2LjM5LDE2LjM5LDAsMCwxLDIzMSwxMDhhMTMuNzgsMTMuNzgsMCwwLDEsMi42NC0xLjA3LDEwLDEwLDAsMCwxLDIuODItLjQxLDExLjQ5LDExLjQ5LDAsMCwxLDMuMjEuNDMsNi40Nyw2LjQ3LDAsMCwxLDIuNTEsMS4zOCw2LjYsNi42LDAsMCwxLDEuNjQsMi40Myw5LjU0LDkuNTQsMCwwLDEsLjYsMy41OGgwVjEyOGEyLjYsMi42LDAsMCwwLC4yOCwxLjA5LDEuOTMsMS45MywwLDAsMCwuNzkuNzYsNC40Nyw0LjQ3LDAsMCwwLDEuMjIuNDFjLjQ3LjA5LDEsLjE3LDEuNTIuMjRoMHYxLjg1SDIzNS43OXYtMS44NWwuNCwwLDEuMTItLjE5YTQuNTksNC41OSwwLDAsMCwxLjIyLS40MSwxLjksMS45LDAsMCwwLC43OC0uNzYsMi41MiwyLjUyLDAsMCwwLC4yOS0xLjMxaDB2LTEzYTQuMSw0LjEsMCwwLDAtMS4zMS0zLjM2LDYuMDksNi4wOSwwLDAsMC0zLjY5LTEsMTEuNDIsMTEuNDIsMCwwLDAtNC4xNS44NiwxMy44LDEzLjgsMCwwLDAtMy43MiwyLjFoMFYxMjhBMi4zMywyLjMzLDAsMCwwLDIyNywxMjlhMS45LDEuOSwwLDAsMCwuNzguNzYsNC41OSw0LjU5LDAsMCwwLDEuMjIuNDFjLjQ3LjA5LDEsLjE3LDEuNTIuMjRoMHYxLjg1SDIxOC4xNXYtMS44NWwuNCwwYy4zOS0uMDYuNzctLjEyLDEuMTItLjE5YTQuNDcsNC40NywwLDAsMCwxLjIyLS40MSwxLjkzLDEuOTMsMCwwLDAsLjc5LS43NiwyLjYzLDIuNjMsMCwwLDAsLjI4LTEuMzFoMHYtMTZsLTMuNTctMS42N1YxMDlsNi45MS0yLjM5Wm0yOSw0LjkxYS41MS41MSwwLDAsMSwuNTIuMTZoMGw1LjgxLDcuNDljLjExLjE1LjA1LjI3LS4xMy4yN2gtOS4zM2EuNTIuNTIsMCwwLDEtLjQ1LS4zMmgwbC0xLjkzLTUuNGEuMzUuMzUsMCwwLDEsLjIxLS40NGgwWm0xNi40OSwyMC44M3YtMmMtLjk1LDAtMS43MywwLTIuMzMtLjFhNSw1LDAsMCwxLTEuNDEtLjMxLDEuMjcsMS4yNywwLDAsMS0uNjctLjU1LDEuNywxLjcsMCwwLDEtLjE2LS43NiwyLjIsMi4yLDAsMCwxLC40My0xLjM4Yy4yOC0uMzguNjMtLjgzLDEtMS4zNGgwbDguNzMtMTAuMzQsOC4zNCwxMC4zNGMuNDEuNTEuNzYsMSwxLjA1LDEuMzRhMi4yLDIuMiwwLDAsMSwuNDMsMS4zOCwyLDIsMCwwLDEtLjE0Ljc2LDEuMTQsMS4xNCwwLDAsMS0uNjUuNTUsNS4xMyw1LjEzLDAsMCwxLTEuNDUuMzFjLS42NC4wNi0xLjUxLjEtMi42Mi4xaDB2MkgyOTkuM3YtMmE1LjgxLDUuODEsMCwwLDEtMi42Ny0uNTUsOC4zMSw4LjMxLDAsMCwxLTIuMzMtMi4xMmgwbC0xMi40LTE1LjQsMTAuMzktMTIuMzVhOC44OCw4Ljg4LDAsMCwxLDIuMzYtMi4xMiw1LjU3LDUuNTcsMCwwLDEsMi42NS0uNTVoMHYtMkgyODMuNzZ2MmEyNS41LDI1LjUsMCwwLDEsMi42Mi4xLDQuODcsNC44NywwLDAsMSwxLjQ2LjMxLDEuMTEsMS4xMSwwLDAsMSwuNjQuNTQsMS44OSwxLjg5LDAsMCwxLC4xNC43NywyLjIsMi4yLDAsMCwxLS40MywxLjM4Yy0uMjguMzgtLjYzLjgzLTEsMS4zM2gwbC03LDguMzktNi43Mi04LjM5Yy0uNDItLjUtLjc3LS45NS0xLjA1LTEuMzNhMi4yLDIuMiwwLDAsMS0uNDMtMS4zOCwyLjA3LDIuMDcsMCwwLDEsLjE0LS43NywxLjE0LDEuMTQsMCwwLDEsLjY0LS41NCw1LDUsMCwwLDEsMS40OC0uMzEsMjUuNzIsMjUuNzIsMCwwLDEsMi42LS4xaDB2LTJIMjYwLjV2MmE1LjY0LDUuNjQsMCwwLDEsMi42OS41NSw4LjM4LDguMzgsMCwwLDEsMi4zMSwyLjEyaDBsMTAuNzgsMTMuNDQtMTIuMDYsMTQuMzFhOC43Nyw4Ljc3LDAsMCwxLTIuNDgsMi4wOSw2LjI5LDYuMjksMCwwLDEtMi44Mi41OGgwdjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzQuNTkgLTczLjQ4KSIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik04Mi40NywxMzAuNjVsLTcuODMtMjQuMTRhMS40MiwxLjQyLDAsMCwxLC40My0xLjQzbDEyLTkuNDFhLjkyLjkyLDAsMCwxLDEuMjkuMThsOC44OSwxMi4yN2ExLjQzLDEuNDMsMCwwLDEsMCwxLjQ5bC0xNCwyMS4xNUM4MywxMzEuMTgsODIuNjQsMTMxLjEzLDgyLjQ3LDEzMC42NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NC41OSAtNzMuNDgpIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTIyLjA2LDE0NS4xNWwtMTUuOC0xOS44MWExLjQsMS40LDAsMCwwLTEuNDMtLjQzbC0xNC40Miw0LjY2YS45MS45MSwwLDAsMC0uNTYsMS4xN0w5NS4wOSwxNDVhMS40MSwxLjQxLDAsMCwwLDEuMjMuODVIMTIxLjdDMTIyLjIxLDE0NS44OCwxMjIuMzcsMTQ1LjU1LDEyMi4wNiwxNDUuMTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzQuNTkgLTczLjQ4KSIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTE0Ny43MywxMTIuNzEsMTI0LDEyMS42MmExLjM5LDEuMzksMCwwLDAtLjg1LDEuMjJsMCwxNS4xNWEuOTIuOTIsMCwwLDAsLjk0LjlsMTUuMjEtLjU3YTEuMzgsMS4zOCwwLDAsMCwxLjE4LS45bDcuODYtMjQuMTRDMTQ4LjQ3LDExMi43OSwxNDguMiwxMTIuNTQsMTQ3LjczLDExMi43MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NC41OSAtNzMuNDgpIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTI0LjgxLDc4LjI4LDEyNiwxMDMuNTlhMS40LDEuNCwwLDAsMCwuODksMS4xOWwxNC40MSw0LjdhLjkyLjkyLDAsMCwwLDEuMTUtLjYxbDQuMTUtMTQuNjVhMS4zNywxLjM3LDAsMCwwLS40OS0xLjRMMTI1LjUzLDc3Ljg5QzEyNS4xMiw3Ny42LDEyNC44LDc3Ljc3LDEyNC44MSw3OC4yOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NC41OSAtNzMuNDgpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNODUsODkuNDNsMjQuNDMsNi43NGExLjQxLDEuNDEsMCwwLDAsMS40MS0uNDhsOC45My0xMi4yNWEuOTMuOTMsMCwwLDAtLjI0LTEuMjhsLTEyLjY0LTguNDhhMS40MSwxLjQxLDAsMCwwLTEuNDksMEw4NC44Myw4OC42MkM4NC40Miw4OC45Miw4NC40OSw4OS4yOSw4NSw4OS40M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NC41OSAtNzMuNDgpIi8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjIyNy4yMSAyMS42MyAyMjcuMjEgMjIuMzkgMjI5LjM2IDIyLjM5IDIyOS4zNiAyOC4wMSAyMzAuMjMgMjguMDEgMjMwLjIzIDIyLjM5IDIzMi4zOCAyMi4zOSAyMzIuMzggMjEuNjMgMjI3LjIxIDIxLjYzIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzA3Ljc0LDEwMS40OWguODNWOTcuNzNjMC0uMTYsMC0uMzksMC0uNzFzMC0uNTYsMC0uNzJ2LS4xOWwxLjg0LDUuMzhoLjg2bDEuODItNS4zOGMwLC4zNCwwLC42NywwLDFzMCwuNTIsMCwuNjV2My43NmguODNWOTUuMTFoLTEuMjNsLTEuODIsNS4zOUwzMDksOTUuMTFoLTEuMjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzQuNTkgLTczLjQ4KSIvPjwvc3ZnPgo"
          alt=""
        />
      </div>
      <ul>
        {navbarLinks.map((link, index) => {
          return <li key={index}>{link}</li>;
        })}
        <div className="navbar-dropdown">
          <li>My Profile</li>
          <div className="navbar-dropdown-content">
            <div id="navbar-dropdown-selling">
              <p>SELLING</p>
              {myProfileSelling.map((link, index) => {
                return (
                  <li key={index}>
                    <a href="">{link}</a>
                  </li>
                );
              })}
              <hr />
            </div>
            <div id="navbar-drowdown-buying">
              <p>BUYING</p>
              {myProfileBuying.map((link, index) => {
                return (
                  <li key={index}>
                    <a href="">{link}</a>
                  </li>
                );
              })}
              <hr />
            </div>
            <div id="navbar-dropdown-account">
              <p>ACCOUNT</p>
              {myProfileAccount.map((link, index) => {
                return (
                  <li key={index}>
                    <a href="">{link}</a>
                  </li>
                );
              })}
              <hr />
              {
                <li>
                  <a href="">{logOut}</a>
                </li>
              }
            </div>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default navbar;
