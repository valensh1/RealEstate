import React from 'react';
import TenXLogo from './TenXLogo';

function Footer() {
  const footerList1 = [
    'ALL PROPERTIES',
    'OFFICE',
    'MULTIFAMILY',
    'RETAIL',
    'HOTEL',
    'INDUSTRIAL',
    'OTHER',
  ];

  const footerList2 = ['TEN-X DASHBOARD', 'CAREERS', 'ABOUT'];
  const footerList3 = ['BROKERS', 'SELLERS', 'BUYERS'];
  const footerList4 = [
    'CONTACT',
    'HELP CENTER',
    '(888) 770-7332',
    'MON-FRI 9AM-8PM ET',
  ];

  const socialMediaIconLinkAddresses = [
    'https://apps.apple.com/app/apple-store/id1466321403',
    'https://www.linkedin.com/company/ten-x/',
    'https://www.facebook.com/tenxcommercial',
    'https://www.youtube.com/channel/UCZfrZg4UMz6U1tCYc-x5-_A',
    'https://www.instagram.com/tenx_cre/',
    'http://www.instagram.com/tenx_cre',
  ];

  const socialMediaImageSrcLinks = [
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCA5MCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjgxNjQ5IDI5LjIyMTRDNi4wNDUwNiAyOS4yMjY1IDYuMjY5ODggMjkuMjI5NSA2LjUwMDI2IDI5LjIyOTVMODMuMzkyMSAyOS4yMzFMODQuMjExOCAyOS4yMjk1Qzg0LjQzNyAyOS4yMjk1IDg0LjY2ODkgMjkuMjI2NSA4NC44OTAzIDI5LjIyMTRDODUuMzYzOSAyOS4yMTU2IDg1LjgzNjMgMjkuMTc0NCA4Ni4zMDM3IDI5LjA5ODFDODYuNzQyNiAyOS4wMjM2IDg3LjE2NzggMjguODgzNSA4Ny41NjUgMjguNjgyNEM4Ny45NTY5IDI4LjQ4MzEgODguMzE0MiAyOC4yMjIxIDg4LjYyMzEgMjcuOTA5MkM4OC45MzI2IDI3LjYwMjUgODkuMTkxNyAyNy4yNDg5IDg5LjM5MSAyNi44NjE0Qzg5LjU5MTEgMjYuNDYzOSA4OS43Mjg4IDI2LjAzOCA4OS43OTk0IDI1LjU5ODdDODkuODc2NiAyNS4xMzUzIDg5LjkxOTggMjQuNjY2OSA4OS45Mjg2IDI0LjE5NzJDODkuOTMxNSAyMy45NjU5IDg5LjkzMTUgMjMuNzQxMiA4OS45MzE1IDIzLjQ5NjFWMjMuNDk0MkM4OS45Mzc1IDIzLjIyMzkgODkuOTM3NSAyMi45NTU5IDg5LjkzNzUgMjIuNjgxMlY2Ljg1NjE2Qzg5LjkzNzUgNi41ODQwNSA4OS45Mzc1IDYuMzE0MTYgODkuOTMxNSA2LjAzMDYxVjYuMDI4MjRDODkuOTMxNSA1LjgwMDExIDg5LjkzMTUgNS41NzA5NCA4OS45MjkzIDUuMzU3NTRDODkuOTIwMyA0Ljg3OTMxIDg5Ljg3NjQgNC40MDIzOCA4OS43OTc5IDMuOTMwNTVDODkuNzI2NyAzLjQ5NjkxIDg5LjU5MDIgMy4wNzY1NSA4OS4zOTMyIDIuNjgzNzNDODguOTkwNCAxLjg5ODE3IDg4LjM1MTkgMS4yNTgzNCA4Ny41NjcxIDAuODUzOTI0Qzg3LjE2ODkgMC42NTM5MDcgODYuNzQzMSAwLjUxNDI5MiA4Ni4zMDM3IDAuNDM5NjczQzg1LjgzOTEgMC4zNjM0MjQgODUuMzY5MyAwLjMyMjMyNyA4NC44OTg1IDAuMzE2NzMyTDg0LjIwODEgMC4zMDcxMjlINi41MDA2M0w1LjgxODM1IDAuMzE2MzYxQzUuMzQzMiAwLjMyMjI0OSA0Ljg2OTE2IDAuMzYzNzE2IDQuNDAwMiAwLjQ0MDQxNEMzLjk2NTI0IDAuNTE0MTA5IDMuNTQzODIgMC42NTI3NTYgMy4xNTAwNiAwLjg1MTcwOUMyLjc1ODM1IDEuMDUyMzggMi40MDA1NSAxLjMxMzI3IDIuMDg5NjkgMS42MjQ4NEMxLjc3ODQ5IDEuOTMzNDggMS41MTkyOCAyLjI5MDQ0IDEuMzIyMTEgMi42ODE4OUMxLjEyMTkyIDMuMDc3NDQgMC45ODMzMzkgMy41MDEyNSAwLjkxMTE3NCAzLjkzODY3QzAuODMzNjE4IDQuNDA2NjYgMC43OTE3NzYgNC44Nzk4NyAwLjc4NjAxIDUuMzU0MjFDMC43ODE1ODcgNS41MDc4MSAwLjc3NDkwMiA2LjAzMDYxIDAuNzc0OTAyIDYuMDMwNjFWMjMuNDk3OUMwLjc3NDkwMiAyMy40OTc5IDAuNzgxMTc4IDI0LjAyODggMC43ODU5NzIgMjQuMTg4M0MwLjc5MTk5NCAyNC42NjM0IDAuODM0MDgxIDI1LjEzNzQgMC45MTE4NyAyNS42MDYxQzAuOTgzOTAyIDI2LjA0MjMgMS4xMjIzNyAyNi40NjQ5IDEuMzIyNDUgMjYuODU5MUMxLjUyMDM2IDI3LjI1MDkgMS43ODEwMiAyNy42MDc2IDIuMDk0MSAyNy45MTUxQzIuNDAyNzIgMjguMjI2MyAyLjc1OTM5IDI4LjQ4NTggMy4xNTA0MyAyOC42ODM4QzMuNTQ1MDkgMjguODgzNCAzLjk2NzMxIDI5LjAyMyA0LjQwMzE2IDI5LjA5ODFDNC44NzA1OCAyOS4xNzQgNS4zNDI5OCAyOS4yMTUyIDUuODE2NDkgMjkuMjIxNFpNNDUuNDY5OSA2LjAyNTQ1SDQ0Ljc5NzlWMTAuNzU5NEg0NS40Njk5VjYuMDI1NDVaTTI4LjcxNjcgNi4yNDc2NkMyOS4zMTMyIDYuMjA0ODUgMjkuODk3NiA2LjQzMTgyIDMwLjMwODggNi44NjYwOUMzMC43MiA3LjMwMDM2IDMwLjkxNDkgNy44OTYxNiAzMC44Mzk2IDguNDg5NUMzMC44Mzk2IDkuOTMwODkgMzAuMDYwNiAxMC43NTk0IDI4LjcxNjcgMTAuNzU5NEgyNy4wODdWNi4yNDc2NkgyOC43MTY3Wk0yNy43ODc3IDEwLjEyMTZIMjguNjM4M0MyOS4wNjQ2IDEwLjE0NyAyOS40Nzk4IDkuOTc5MDcgMjkuNzY4NCA5LjY2NDI4QzMwLjA1NyA5LjM0OTUgMzAuMTg4NSA4LjkyMTQxIDMwLjEyNjIgOC40OTg4OEMzMC4xODQgOC4wNzgxMSAzMC4wNTA2IDcuNjUzNTUgMjkuNzYyNyA3LjM0MTMzQzI5LjQ3NDggNy4wMjkxMSAyOS4wNjI0IDYuODYxOSAyOC42MzgzIDYuODg1NDRIMjcuNzg3N1YxMC4xMjE2Wk0zMi4zODYzIDcuNTMxNDFDMzEuODY1NCA3Ljg1NDY3IDMxLjU3MjggOC40NDUzIDMxLjYzMTEgOS4wNTU1OUMzMS41NzE2IDkuNjY2NTQgMzEuODY0IDEwLjI1ODMgMzIuMzg1NCAxMC41ODIzQzMyLjkwNjggMTAuOTA2MiAzMy41NjY5IDEwLjkwNjIgMzQuMDg4MiAxMC41ODIzQzM0LjYwOTYgMTAuMjU4MyAzNC45MDIgOS42NjY1NCAzNC44NDI1IDkuMDU1NTlDMzQuOTAwOSA4LjQ0NTMgMzQuNjA4MyA3Ljg1NDY3IDM0LjA4NzMgNy41MzE0MUMzMy41NjY0IDcuMjA4MTUgMzIuOTA3MiA3LjIwODE1IDMyLjM4NjMgNy41MzE0MVpNMzQuMTUxNCA5LjA1NTZDMzQuMTUxNCA4LjMxNzU1IDMzLjgxOTkgNy44ODU5NSAzMy4yMzggNy44ODU5NUMzMi42NTM5IDcuODg1OTUgMzIuMzI1MyA4LjMxNzU1IDMyLjMyNTMgOS4wNTU2QzMyLjMyNTMgOS43OTk1NiAzMi42NTM5IDEwLjIyNzggMzMuMjM4IDEwLjIyNzhDMzMuODE5OSAxMC4yMjc4IDM0LjE1MTQgOS43OTY2IDM0LjE1MTQgOS4wNTU2Wk0zOC40MTQyIDEwLjc1OTdIMzkuMTExM0w0MC4wNDYxIDcuMzU0ODNIMzkuMzc0MkwzOC43NjcyIDkuOTUyOTNIMzguNzE0TDM4LjAxNCA3LjM1NDgzSDM3LjM2OTRMMzYuNjY5NCA5Ljk1MjkzSDM2LjYxOTFMMzYuMDA5MiA3LjM1NDgzSDM1LjMyNzZMMzYuMjY2MiAxMC43NTk3SDM2Ljk1NjZMMzcuNjU3NCA4LjI1MkgzNy43MTA1TDM4LjQxNDIgMTAuNzU5N1pNNDAuODM1NiA3LjM1NDlINDEuNDgyNVY3Ljg5NTc5SDQxLjUzMjdDNDEuNzA3MyA3LjQ5NzU1IDQyLjExNTQgNy4yNTM5NCA0Mi41NDg4IDcuMjg5MTdDNDIuODg0MyA3LjI2Mzk0IDQzLjIxMzIgNy4zOTI2OCA0My40NDI1IDcuNjM5MDRDNDMuNjcxNyA3Ljg4NTQgNDMuNzc2NSA4LjIyMjY1IDQzLjcyNzMgOC41NTU1NlYxMC43NTk3SDQzLjA1NTNWOC43MjQzQzQzLjA1NTMgOC4xNzcxMyA0Mi44MTc1IDcuOTA1MDIgNDIuMzIwNiA3LjkwNTAyQzQyLjA5MyA3Ljg5NDQyIDQxLjg3MjEgNy45ODM3NSA0MS43MTU4IDguMTQ5NkM0MS41NTk1IDguMzE1NDUgNDEuNDgzNSA4LjU0MTI3IDQxLjUwNzYgOC43Njc4NlYxMC43NTk3SDQwLjgzNTZMNDAuODM1NiA3LjM1NDlaTTQ2LjQwNCA5LjA1NTY2QzQ2LjM0NTcgOC40NDUzMyA0Ni42Mzg0IDcuODU0NjggNDcuMTU5NCA3LjUzMTQxQzQ3LjY4MDMgNy4yMDgxNSA0OC4zMzk1IDcuMjA4MTUgNDguODYwNSA3LjUzMTQxQzQ5LjM4MTQgNy44NTQ2OCA0OS42NzQxIDguNDQ1MzMgNDkuNjE1OCA5LjA1NTY2QzQ5LjY3NTIgOS42NjY2MyA0OS4zODI4IDEwLjI1ODQgNDguODYxNCAxMC41ODIzQzQ4LjMzOTkgMTAuOTA2MyA0Ny42Nzk5IDEwLjkwNjMgNDcuMTU4NSAxMC41ODIzQzQ2LjYzNyAxMC4yNTg0IDQ2LjM0NDYgOS42NjY2MyA0Ni40MDQgOS4wNTU2NlpNNDguMDEwOCA3Ljg4NTk1QzQ4LjU5MjcgNy44ODU5NSA0OC45MjQyIDguMzE3NTUgNDguOTI0MiA5LjA1NTZDNDguOTI0MiA5Ljc5NjYgNDguNTkyNyAxMC4yMjc4IDQ4LjAxMDggMTAuMjI3OEM0Ny40MjY3IDEwLjIyNzggNDcuMDk4MSA5Ljc5OTU2IDQ3LjA5ODEgOS4wNTU2QzQ3LjA5ODEgOC4zMTc1NSA0Ny40MjY3IDcuODg1OTUgNDguMDEwOCA3Ljg4NTk1Wk01MC4zMjMyIDkuNzk2NjNDNTAuMzIzMiA5LjE4Mzc0IDUwLjc3OTUgOC44MzA0MSA1MS41ODk2IDguNzgwMTlMNTIuNTExOSA4LjcyNzAzVjguNDMzMTRDNTIuNTExOSA4LjA3MzUzIDUyLjI3NDEgNy44NzA0NyA1MS44MTQ4IDcuODcwNDdDNTEuNDM5NyA3Ljg3MDQ3IDUxLjE3OTggOC4wMDgxOCA1MS4xMDUyIDguMjQ4OTFINTAuNDU0NkM1MC41MjMzIDcuNjY0MDggNTEuMDczNCA3LjI4ODk2IDUxLjg0NTggNy4yODg5NkM1Mi42OTk0IDcuMjg4OTYgNTMuMTgwOSA3LjcxMzkyIDUzLjE4MDkgOC40MzMxNFYxMC43NTk1SDUyLjUzNFYxMC4yODFINTIuNDgwOEM1Mi4yNjExIDEwLjYzMDUgNTEuODcwNSAxMC44MzQ3IDUxLjQ1ODEgMTAuODE1NkM1MS4xNjkxIDEwLjg0NTcgNTAuODgwOCAxMC43NTIxIDUwLjY2NDYgMTAuNTU3OUM1MC40NDgzIDEwLjM2MzggNTAuMzI0MyAxMC4wODcyIDUwLjMyMzIgOS43OTY2M1pNNTIuNTExOCA5LjIyMTEyVjkuNTA1NzhDNTIuNDk3MSA5LjcyMjc4IDUyLjM5NSA5LjkyNDUzIDUyLjIyODggMTAuMDY0OEM1Mi4wNjI2IDEwLjIwNTEgNTEuODQ2NiAxMC4yNzIgNTEuNjMwMiAxMC4yNTAxQzUxLjI2NDYgMTAuMjUwMSA1MC45OTg4IDEwLjA3MTggNTAuOTk4OCA5Ljc2NTMzQzUwLjk5ODggOS40NjUxNiA1MS4yMTE1IDkuMzA1NjYgNTEuNjgwNCA5LjI3NDI4TDUyLjUxMTggOS4yMjExMlpNNTQuMDYzOSA5LjA1NTU2QzU0LjA2MzkgNy45Nzk2OSA1NC42MTcgNy4yOTgxMyA1NS40NzczIDcuMjk4MTNDNTUuOTExNyA3LjI3ODExIDU2LjMxODUgNy41MTA4NyA1Ni41MjE0IDcuODk1NDhINTYuNTcxNlY2LjAyNTQ1SDU3LjI0MzZWMTAuNzU5NEg1Ni41OTk3VjEwLjIyMTVINTYuNTQ2NUM1Ni4zMjgzIDEwLjYwMjkgNTUuOTE2NCAxMC44MzE3IDU1LjQ3NzMgMTAuODE1NkM1NC42MTExIDEwLjgxNTYgNTQuMDYzOSAxMC4xMzQgNTQuMDYzOSA5LjA1NTU2Wk01NS42Njc5IDEwLjIxMjNDNTUuMDk4NiAxMC4yMTIzIDU0Ljc1ODIgOS43Nzc3MSA1NC43NTgyIDkuMDU1NTNDNTQuNzU4MSA4LjMzOTI2IDU1LjEwMjIgNy45MDE3NSA1NS42Njc5IDcuOTAxNzVDNTYuMjMwNiA3LjkwMTc1IDU2LjU4NDMgOC4zNDg4NyA1Ni41ODQzIDkuMDU4NDlDNTYuNTg0MyA5Ljc3MTQ0IDU2LjIzNDIgMTAuMjEyMyA1NS42Njc5IDEwLjIxMjNaTTYwLjAyMzcgOS4wNTU1OUM1OS45NjUzIDguNDQ1MyA2MC4yNTggNy44NTQ2NyA2MC43Nzg5IDcuNTMxNDFDNjEuMjk5OCA3LjIwODE1IDYxLjk1OSA3LjIwODE1IDYyLjQ3OTkgNy41MzE0MUM2My4wMDA4IDcuODU0NjcgNjMuMjkzNSA4LjQ0NTMgNjMuMjM1MSA5LjA1NTU5QzYzLjI5NDYgOS42NjY1NCA2My4wMDIyIDEwLjI1ODMgNjIuNDgwOCAxMC41ODIzQzYxLjk1OTQgMTAuOTA2MiA2MS4yOTk0IDEwLjkwNjIgNjAuNzc4IDEwLjU4MjNDNjAuMjU2NiAxMC4yNTgzIDU5Ljk2NDIgOS42NjY1NCA2MC4wMjM3IDkuMDU1NTlaTTYxLjYzMDUgNy44ODU5NUM2Mi4yMTIzIDcuODg1OTUgNjIuNTQzOSA4LjMxNzU1IDYyLjU0MzkgOS4wNTU2QzYyLjU0MzkgOS43OTY2IDYyLjIxMjMgMTAuMjI3OCA2MS42MzA1IDEwLjIyNzhDNjEuMDQ2NCAxMC4yMjc4IDYwLjcxNzggOS43OTk1NiA2MC43MTc4IDkuMDU1NkM2MC43MTc4IDguMzE3NTUgNjEuMDQ2NCA3Ljg4NTk1IDYxLjYzMDUgNy44ODU5NVpNNjQuMTM2NyA3LjM1NDlINjQuNzgzNlY3Ljg5NTc5SDY0LjgzMzhDNjUuMDA4NCA3LjQ5NzU1IDY1LjQxNjUgNy4yNTM5NCA2NS44NDk5IDcuMjg5MTdDNjYuMTg1NSA3LjI2Mzk0IDY2LjUxNDMgNy4zOTI2OCA2Ni43NDM2IDcuNjM5MDRDNjYuOTcyOSA3Ljg4NTQgNjcuMDc3NyA4LjIyMjY1IDY3LjAyODQgOC41NTU1NlYxMC43NTk3SDY2LjM1NjRWOC43MjQzQzY2LjM1NjQgOC4xNzcxMyA2Ni4xMTg3IDcuOTA1MDIgNjUuNjIxNyA3LjkwNTAyQzY1LjM5NDEgNy44OTQ0MiA2NS4xNzMyIDcuOTgzNzUgNjUuMDE2OSA4LjE0OTZDNjQuODYwNiA4LjMxNTQ1IDY0Ljc4NDYgOC41NDEyNyA2NC44MDg3IDguNzY3ODZWMTAuNzU5N0g2NC4xMzY3VjcuMzU0OVpNNzAuODI1MyA3LjM3MDI1VjYuNTA3MDRINzAuMTUyNlY3LjM3MDIySDY5LjYxMjFWNy45MzYyMkg3MC4xNTI2VjkuODU5MDlDNzAuMTUyNiAxMC41MTU1IDcwLjQ1MDIgMTAuNzc4NCA3MS4xOTc0IDEwLjc3ODRDNzEuMzIgMTAuNzc3MiA3MS40NDIzIDEwLjc2NTcgNzEuNTYzIDEwLjc0NDFWMTAuMTg0NEM3MS40Nzc5IDEwLjE5NDQgNzEuMzkyNCAxMC4xOTk2IDcxLjMwNjcgMTAuMTk5OUM3MC45NzIyIDEwLjE5OTkgNzAuODI1MyAxMC4wNDM3IDcwLjgyNTMgOS42ODcwNFY3LjkzNjI1SDcxLjU2M1Y3LjM3MDI1SDcwLjgyNTNaTTcyLjQ4MDggNi4wMjU0NUg3My4xNDY4VjcuOTAxNzdINzMuMkM3My4zODMgNy41MDAwNSA3My43OTgyIDcuMjU2MTMgNzQuMjM4MiA3LjI5MTg0Qzc0LjU3MTkgNy4yNzM2OCA3NC44OTYzIDcuNDA1MjYgNzUuMTIzIDcuNjUwNzJDNzUuMzQ5OCA3Ljg5NjE5IDc1LjQ1NTMgOC4yMjk5OCA3NS40MTA4IDguNTYxMThWMTAuNzU5NUg3NC43MzgyVjguNzI2OTVDNzQuNzM4MiA4LjE4MzEgNzQuNDg0OSA3LjkwNzY3IDc0LjAxMDEgNy45MDc2N0M3My43NzYzIDcuODg4NSA3My41NDYgNy45NzM0OSA3My4zODA3IDguMTM5OTJDNzMuMjE1NCA4LjMwNjM0IDczLjEzMiA4LjUzNzI0IDczLjE1MjggOC43NzA4OFYxMC43NTk0SDcyLjQ4MDhMNzIuNDgwOCA2LjAyNTQ1Wk03Ny44NTM2IDEwLjgyNTNDNzguNTE5IDEwLjg5NzUgNzkuMTQwNSAxMC40ODI1IDc5LjMyODkgOS44NDAyNUw3OC42ODIxIDkuODQwMjNDNzguNTIwOCAxMC4xMjk0IDc4LjIwMDggMTAuMjkyNSA3Ny44NzIgMTAuMjUzQzc3LjYxODUgMTAuMjU1OCA3Ny4zNzU1IDEwLjE1MTYgNzcuMjAyOSA5Ljk2NTg2Qzc3LjAzMDMgOS43ODAxNiA3Ni45NDQgOS41MzAyNCA3Ni45NjUyIDkuMjc3NTlWOS4yMzk5M0g3OS4zNjk1VjkuMDA1NDZDNzkuMzY5NSA3LjkzNjI4IDc4Ljc5OCA3LjI4OTAyIDc3Ljg1MDYgNy4yODkwMkM3Ny4zOTU0IDcuMjg1MTQgNzYuOTYxIDcuNDc4OTUgNzYuNjU5OCA3LjgyMDI0Qzc2LjM1ODYgOC4xNjE1MyA3Ni4yMjAzIDguNjE2NzEgNzYuMjgwNyA5LjA2Nzg3Qzc2LjIxODYgOS41MTc3OCA3Ni4zNTc0IDkuOTcyMjQgNzYuNjYwMyAxMC4zMTA3Qzc2Ljk2MzIgMTAuNjQ5MSA3Ny4zOTk1IDEwLjgzNzMgNzcuODUzNiAxMC44MjUzWk03Ni45NjUyIDguNzQyOTFINzguNjg1Qzc4LjcwMjEgOC41MTE4MyA3OC42MjA4IDguMjg0MjcgNzguNDYxMiA4LjExNjI5Qzc4LjMwMTYgNy45NDgzMiA3OC4wNzg1IDcuODU1NTYgNzcuODQ2OSA3Ljg2MDg3Qzc3LjYxMjEgNy44NTc5MiA3Ny4zODYgNy45NDk5MSA3Ny4yMiA4LjExNTk4Qzc3LjA1NDEgOC4yODIwNSA3Ni45NjIyIDguNTA4MTIgNzYuOTY1MiA4Ljc0MjkxWk01NC4zMzc4IDIwLjA4OTJDNTQuNDQyIDIxLjAyMDQgNTUuMzQ2NSAyMS42MzE4IDU2LjU4MjYgMjEuNjMxOEM1Ny43NjcxIDIxLjYzMTggNTguNjE5MiAyMS4wMjA0IDU4LjYxOTIgMjAuMTgwOEM1OC42MTkyIDE5LjQ1MiA1OC4xMDUyIDE5LjAxNTYgNTYuODg4MyAxOC43MTY1TDU1LjY3MTQgMTguNDIzM0M1My45NDcyIDE4LjAwNjkgNTMuMTQ2OCAxNy4yMDA1IDUzLjE0NjggMTUuODkyQzUzLjE0NjggMTQuMjcxOSA1NC41NTg2IDEzLjE1OTIgNTYuNTYzNCAxMy4xNTkyQzU4LjU0NzUgMTMuMTU5MiA1OS45MDc3IDE0LjI3MTkgNTkuOTUzNSAxNS44OTJINTguNTM1QzU4LjQ1MDEgMTQuOTU1IDU3LjY3NTUgMTQuMzg5NCA1Ni41NDM1IDE0LjM4OTRDNTUuNDExNSAxNC4zODk0IDU0LjYzNjkgMTQuOTYxNiA1NC42MzY5IDE1Ljc5NDZDNTQuNjM2OSAxNi40NTg0IDU1LjEzMTYgMTYuODQ5IDU2LjM0MTkgMTcuMTQ4MUw1Ny4zNzY0IDE3LjQwMjFDNTkuMzAyOSAxNy44NTc3IDYwLjEwMzQgMTguNjMxNiA2MC4xMDM0IDIwLjAwNUM2MC4xMDM0IDIxLjc2MTcgNTguNzA0MSAyMi44NjE5IDU2LjQ3ODUgMjIuODYxOUM1NC4zOTYxIDIyLjg2MTkgNTIuOTkwMiAyMS43ODc1IDUyLjg5OTQgMjAuMDg5Mkw1NC4zMzc4IDIwLjA4OTJaTTI4LjUyMiAyMC4xNjc0SDMyLjEwMTFMMzIuOTU5OSAyMi43MDU0SDM0LjUwMTdMMzEuMTExNiAxMy4zMTU2SDI5LjUzNjZMMjYuMTQ2NSAyMi43MDU0SDI3LjY2MjVMMjguNTIyIDIwLjE2NzRaTTMxLjcyOTggMTguOTk2M0gyOC44OTI3TDMwLjI5MjEgMTQuODc3NEgzMC4zMzEyTDMxLjcyOTggMTguOTk2M1pNNDEuODIzMiAxOS4yODNDNDEuODIzMiAyMS40MTA0IDQwLjY4NDYgMjIuNzc3MiAzOC45NjYzIDIyLjc3NzJDMzguMDc4MSAyMi44MjM3IDM3LjI0MTUgMjIuMzU4NSAzNi44MTIzIDIxLjU3OTVIMzYuNzc5OFYyNC45NzAzSDM1LjM3NDZWMTUuODU5N0gzNi43MzQ4VjE2Ljk5ODRIMzYuNzYwNkMzNy4yMDg4IDE2LjIyNDMgMzguMDQ2NCAxNS43NTkzIDM4Ljk0MDQgMTUuNzg4MUM0MC42Nzc5IDE1Ljc4ODEgNDEuODIzMiAxNy4xNjE1IDQxLjgyMzIgMTkuMjgzWk0zOC41Njk3IDE2Ljk4NTVDMzkuNjYyNiAxNi45ODU1IDQwLjM3ODggMTcuODk2NyA0MC4zNzg4IDE5LjI4MjdDNDAuMzc4OCAyMC42ODEzIDM5LjY2MjYgMjEuNTg1OSAzOC41Njk3IDIxLjU4NTlDMzcuNDk2MSAyMS41ODU5IDM2Ljc3MzkgMjAuNjYyMSAzNi43NzM5IDE5LjI4MjdDMzYuNzczOSAxNy45MTU5IDM3LjQ5NjEgMTYuOTg1NSAzOC41Njk3IDE2Ljk4NTVaTTQ5LjM1NzkgMTkuMjgzQzQ5LjM1NzkgMjEuNDEwNCA0OC4yMTkzIDIyLjc3NzIgNDYuNTAxIDIyLjc3NzJDNDUuNjEyOCAyMi44MjM3IDQ0Ljc3NjIgMjIuMzU4NSA0NC4zNDcgMjEuNTc5NUg0NC4zMTQ1VjI0Ljk3MDNINDIuOTA5M1YxNS44NTk3SDQ0LjI2OTRWMTYuOTk4M0g0NC4yOTUzQzQ0Ljc0MzUgMTYuMjI0MiA0NS41ODExIDE1Ljc1OTIgNDYuNDc1MSAxNS43ODgxQzQ4LjIxMjYgMTUuNzg4MSA0OS4zNTc5IDE3LjE2MTUgNDkuMzU3OSAxOS4yODNaTTQ2LjEwNDQgMTYuOTg1NUM0Ny4xOTczIDE2Ljk4NTUgNDcuOTEzNiAxNy44OTY3IDQ3LjkxMzYgMTkuMjgyN0M0Ny45MTM2IDIwLjY4MTMgNDcuMTk3MyAyMS41ODU5IDQ2LjEwNDQgMjEuNTg1OUM0NS4wMzA4IDIxLjU4NTkgNDQuMzA4NiAyMC42NjIxIDQ0LjMwODYgMTkuMjgyN0M0NC4zMDg2IDE3LjkxNTkgNDUuMDMwOCAxNi45ODU1IDQ2LjEwNDQgMTYuOTg1NVpNNjMuMTM2MSAxNS44NTk0VjE0LjIzOTNINjEuNzI0M1YxNS44NTk0SDYwLjcyODlWMTYuOTcyMkg2MS43MjQzVjIwLjg5NjFDNjEuNzI0MyAyMi4yMjM4IDYyLjI2NDggMjIuNzQ0NCA2My42NTA4IDIyLjc0NDRDNjMuOTEyNSAyMi43NDkzIDY0LjE3NCAyMi43Mjc1IDY0LjQzMTMgMjIuNjc5NFYyMS41NzMzQzY0LjI3NzkgMjEuNTkyMiA2NC4xMjM2IDIxLjYwMzEgNjMuOTY5MSAyMS42MDU4QzYzLjM5NjggMjEuNjA1OCA2My4xMzYxIDIxLjMzMjYgNjMuMTM2MSAyMC43NDYyVjE2Ljk3MjJINjQuNDM4VjE1Ljg1OTRINjMuMTM2MVpNNjUuMTkxOSAxOS4yODI3QzY1LjE5MTkgMTcuMTI4NyA2Ni40NjA1IDE1Ljc3NTIgNjguNDM4NyAxNS43NzUyQzcwLjQyMzYgMTUuNzc1MiA3MS42ODYzIDE3LjEyODcgNzEuNjg2MyAxOS4yODI3QzcxLjY4NjMgMjEuNDQyNiA3MC40MzAyIDIyLjc5MDIgNjguNDM4NyAyMi43OTAyQzY2LjQ0NzkgMjIuNzkwMiA2NS4xOTE5IDIxLjQ0MjYgNjUuMTkxOSAxOS4yODI3Wk02OC40Mzg3IDE2LjkzMzRDNjkuNTc3MyAxNi45MzM0IDcwLjI1NDQgMTcuODA1NCA3MC4yNTQ0IDE5LjI4M0M3MC4yNTQ0IDIwLjc2NjUgNjkuNTc3MyAyMS42MzE5IDY4LjQzODcgMjEuNjMxOUM2Ny4zIDIxLjYzMTkgNjYuNjIzNiAyMC43NjY1IDY2LjYyMzYgMTkuMjgzQzY2LjYyMzYgMTcuODEyMSA2Ny4zIDE2LjkzMzQgNjguNDM4NyAxNi45MzM0Wk03Mi44NDQ4IDE1Ljg1OTdINzQuMTg1VjE3LjAyNDlINzQuMjE3NUM3NC40MDQ0IDE2LjI3NDggNzUuMDkxNyAxNS43NTg1IDc1Ljg2NDIgMTUuNzg4Qzc2LjAyNjEgMTUuNzg3NSA3Ni4xODc2IDE1LjgwNSA3Ni4zNDU2IDE1Ljg0MDVWMTcuMTU0OEM3Ni4xNDEyIDE3LjA5MjQgNzUuOTI3OSAxNy4wNjM3IDc1LjcxNDMgMTcuMDY5OUM3NS4zMDEyIDE3LjA1MzIgNzQuOTAxMyAxNy4yMTc4IDc0LjYxOTggMTcuNTIwNkM3NC4zMzgzIDE3LjgyMzQgNzQuMjAzMiAxOC4yMzQyIDc0LjI1IDE4LjY0NVYyMi43MDU1SDcyLjg0NDhWMTUuODU5N1pNNzkuODc2OCAyMi43OTAyQzgxLjQyNTIgMjIuNzkwMiA4Mi42MzU1IDIxLjkzNzMgODIuODI0NSAyMC42OTQ2TDgxLjQ5MDIgMjAuNjk0NkM4MS4yMzQxIDIxLjMyOTggODAuNTkxMiAyMS43MjE0IDc5LjkwOTMgMjEuNjU3NUM3OS4zOTggMjEuNjc2MyA3OC45MDMyIDIxLjQ3NDUgNzguNTUwOCAyMS4xMDM1Qzc4LjE5ODUgMjAuNzMyNSA3OC4wMjI1IDIwLjIyOCA3OC4wNjc2IDE5LjcxODRWMTkuNjMzNUg4Mi45MDI4VjE5LjE1MkM4Mi45MDI4IDE3LjA3NjMgODEuNzExNyAxNS43NzUyIDc5LjgxNzcgMTUuNzc1MkM3Ny44OTE5IDE1Ljc3NTIgNzYuNjQ5MSAxNy4xNjc5IDc2LjY0OTEgMTkuMzE1MkM3Ni42NDkxIDIxLjQ1NTkgNzcuODg1MyAyMi43OTAyIDc5Ljg3NjggMjIuNzkwMlpNNzguMDc0MyAxOC42NTE3SDgxLjQ5NjlDODEuNTIyNCAxOC4xOTM4IDgxLjM1NTcgMTcuNzQ1OSA4MS4wMzY5IDE3LjQxNjFDODAuNzE4MiAxNy4wODYzIDgwLjI3NjMgMTYuOTA0NCA3OS44MTc3IDE2LjkxNDJDNzkuMzU1NSAxNi45MTE1IDc4LjkxMTQgMTcuMDkzNSA3OC41ODQgMTcuNDE5N0M3OC4yNTY2IDE3Ljc0NiA3OC4wNzMxIDE4LjE4OTUgNzguMDc0MyAxOC42NTE3Wk0xNy42MjA4IDYuMjM5NTFDMTcuNjk0IDcuMTk1NDQgMTcuMzkxNyA4LjE0MjI3IDE2Ljc3ODEgOC44Nzg5QzE2LjE4MjcgOS42MTkzNiAxNS4yODA3IDEwLjA0NTkgMTQuMzMwNiAxMC4wMzYxQzE0LjI3MDIgOS4xMDc2NyAxNC41ODEzIDguMTkzMzEgMTUuMTk1NCA3LjQ5NDRDMTUuODE3MyA2Ljc4NjAzIDE2LjY4MzMgNi4zMzc5NyAxNy42MjA4IDYuMjM5NTFaTTIwLjYyNTUgMTEuODU2NEMxOS41MzI2IDEyLjUyODMgMTguODYwMSAxMy43MTMxIDE4Ljg0MzYgMTQuOTk1OUMxOC44NDUxIDE2LjQ0NzIgMTkuNzE0MyAxNy43NTcgMjEuMDUwOSAxOC4zMjIzQzIwLjc5MzggMTkuMTU3NCAyMC40MDYzIDE5Ljk0NjYgMTkuOTAyOCAyMC42NjA3QzE5LjIyNjUgMjEuNjcyMyAxOC41MTc0IDIyLjY2MDYgMTcuMzkyIDIyLjY3ODlDMTYuODU2OCAyMi42OTEzIDE2LjQ5NTUgMjIuNTM3NCAxNi4xMTkgMjIuMzc3QzE1LjcyNjMgMjIuMjA5NyAxNS4zMTcxIDIyLjAzNTQgMTQuNjc2NyAyMi4wMzU0QzEzLjk5NzYgMjIuMDM1NCAxMy41NyAyMi4yMTUzIDEzLjE1NzcgMjIuMzg4OEMxMi44MDE0IDIyLjUzODggMTIuNDU2NCAyMi42ODQgMTEuOTcwMiAyMi43MDQyQzEwLjg5ODQgMjIuNzQzOSAxMC4wNzkzIDIxLjYyNDQgOS4zNzg0MSAyMC42MjIzQzcuOTc3NTcgMTguNTc1NyA2Ljg4Njc3IDE0Ljg1NDcgOC4zNDkxNSAxMi4zMjI4QzkuMDM1ODYgMTEuMDg4OCAxMC4zMTk4IDEwLjMwNTggMTEuNzMxMyAxMC4yNjAyQzEyLjMzOTIgMTAuMjQ3NyAxMi45MjI1IDEwLjQ4MiAxMy40MzM5IDEwLjY4NzRDMTMuODI1IDEwLjg0NDUgMTQuMTc0IDEwLjk4NDcgMTQuNDU5OCAxMC45ODQ3QzE0LjcxMTEgMTAuOTg0NyAxNS4wNTA0IDEwLjg1IDE1LjQ0NTggMTAuNjkzMUMxNi4wNjg3IDEwLjQ0NTggMTYuODMwOSAxMC4xNDMzIDE3LjYwNzYgMTAuMjI0OUMxOC44MTQ1IDEwLjI2MjYgMTkuOTMyOSAxMC44NjczIDIwLjYyNTUgMTEuODU2NFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC45ODM5IDAuMzA3MTI5QzYuOTk2OCAwLjMwNzEyOSAwLjUyMTk3MyA2Ljc4MTk2IDAuNTIxOTczIDE0Ljc2OTFDMC41MjE5NzMgMjIuNzU2MiA2Ljk5NjggMjkuMjMxIDE0Ljk4MzkgMjkuMjMxQzIyLjk3MSAyOS4yMzEgMjkuNDQ1OSAyMi43NTYyIDI5LjQ0NTkgMTQuNzY5MUMyOS40NDU5IDYuNzgxOTYgMjIuOTcxIDAuMzA3MTI5IDE0Ljk4MzkgMC4zMDcxMjlaTTcuNDY0NjcgMTIuMjg1MkgxMC43NDIxVjIyLjEzMjRINy40NjQ2N1YxMi4yODUyWk0xMC45NTc5IDkuMjM5QzEwLjkzNjYgOC4yNzM0OSAxMC4yNDYyIDcuNTM4MSA5LjEyNTAxIDcuNTM4MUM4LjAwMzgzIDcuNTM4MSA3LjI3MDg1IDguMjczNDkgNy4yNzA4NSA5LjIzOUM3LjI3MDg1IDEwLjE4NDUgNy45ODIxNyAxMC45NDExIDkuMDgyNDcgMTAuOTQxMUg5LjEwMzQxQzEwLjI0NjIgMTAuOTQxMSAxMC45NTc5IDEwLjE4NDUgMTAuOTU3OSA5LjIzOVpNMTguNzg4MSAxMi4wNTM5QzIwLjk0NDcgMTIuMDUzOSAyMi41NjE2IDEzLjQ2MTYgMjIuNTYxNiAxNi40ODYzTDIyLjU2MTQgMjIuMTMyNEgxOS4yODQyVjE2Ljg2NDFDMTkuMjg0MiAxNS41NDA4IDE4LjgwOTkgMTQuNjM3OSAxNy42MjM1IDE0LjYzNzlDMTYuNzE4MSAxNC42Mzc5IDE2LjE3ODcgMTUuMjQ2NiAxNS45NDE5IDE1LjgzNDVDMTUuODU1MiAxNi4wNDUyIDE1LjgzMzkgMTYuMzM4OCAxNS44MzM5IDE2LjYzMzFWMjIuMTMyNkgxMi41NTYyQzEyLjU1NjIgMjIuMTMyNiAxMi41OTk0IDEzLjIwOTQgMTIuNTU2MiAxMi4yODU0SDE1LjgzMzlWMTMuNjgwMkMxNi4yNjg5IDEzLjAwOTcgMTcuMDQ4IDEyLjA1MzkgMTguNzg4MSAxMi4wNTM5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS4zNTY4IDAuMzA3MTI5QzcuMzY5NzMgMC4zMDcxMjkgMC44OTQ4OTcgNi43ODE5NiAwLjg5NDg5NyAxNC43NjkxQzAuODk0ODk3IDIyLjc1NjIgNy4zNjk3MyAyOS4yMzEgMTUuMzU2OCAyOS4yMzFDMjMuMzQzOSAyOS4yMzEgMjkuODE4OCAyMi43NTYyIDI5LjgxODggMTQuNzY5MUMyOS44MTg4IDYuNzgxOTYgMjMuMzQzOSAwLjMwNzEyOSAxNS4zNTY4IDAuMzA3MTI5Wk0xNi44NjQyIDE1LjQwNDNWMjMuMjcyNEgxMy42MDg4VjE1LjQwNDZIMTEuOTgyNFYxMi42OTMySDEzLjYwODhWMTEuMDY1M0MxMy42MDg4IDguODUzNDEgMTQuNTI3MiA3LjUzODEgMTcuMTM2NCA3LjUzODFIMTkuMzA4NlYxMC4yNDk4SDE3Ljk1MDhDMTYuOTM1MSAxMC4yNDk4IDE2Ljg2NzkgMTAuNjI4NyAxNi44Njc5IDExLjMzNTlMMTYuODY0MiAxMi42OTI5SDE5LjMyNEwxOS4wMzYxIDE1LjQwNDNIMTYuODY0MloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43Mjk4IDAuMzA3MTI5QzYuNzQyNjUgMC4zMDcxMjkgMC4yNjc4MjIgNi43ODE5NiAwLjI2NzgyMiAxNC43NjkxQzAuMjY3ODIyIDIyLjc1NjIgNi43NDI2NSAyOS4yMzEgMTQuNzI5OCAyOS4yMzFDMjIuNzE2OSAyOS4yMzEgMjkuMTkxNyAyMi43NTYyIDI5LjE5MTcgMTQuNzY5MUMyOS4xOTE3IDYuNzgxOTYgMjIuNzE2OSAwLjMwNzEyOSAxNC43Mjk4IDAuMzA3MTI5Wk0yMC43NTY1IDkuNzk3NDlDMjEuNDIwMiA5Ljk3OTYzIDIxLjk0MyAxMC41MTYzIDIyLjEyMDQgMTEuMTk3OEMyMi40NDI3IDEyLjQzMyAyMi40NDI3IDE1LjAxMDIgMjIuNDQyNyAxNS4wMTAyQzIyLjQ0MjcgMTUuMDEwMiAyMi40NDI3IDE3LjU4NzMgMjIuMTIwNCAxOC44MjI2QzIxLjk0MyAxOS41MDQxIDIxLjQyMDIgMjAuMDQwOCAyMC43NTY1IDIwLjIyM0MxOS41NTM2IDIwLjU1NCAxNC43Mjk3IDIwLjU1NCAxNC43Mjk3IDIwLjU1NEMxNC43Mjk3IDIwLjU1NCA5LjkwNTgyIDIwLjU1NCA4LjcwMjg1IDIwLjIyM0M4LjAzOTA5IDIwLjA0MDggNy41MTYzNiAxOS41MDQxIDcuMzM4OTYgMTguODIyNkM3LjAxNjY3IDE3LjU4NzMgNy4wMTY2NyAxNS4wMTAyIDcuMDE2NjcgMTUuMDEwMkM3LjAxNjY3IDE1LjAxMDIgNy4wMTY2NyAxMi40MzMgNy4zMzg5NiAxMS4xOTc4QzcuNTE2MzYgMTAuNTE2MyA4LjAzOTA5IDkuOTc5NjMgOC43MDI4NSA5Ljc5NzQ5QzkuOTA1ODIgOS40NjY0NyAxNC43Mjk3IDkuNDY2NDcgMTQuNzI5NyA5LjQ2NjQ3QzE0LjcyOTcgOS40NjY0NyAxOS41NTM2IDkuNDY2NDcgMjAuNzU2NSA5Ljc5NzQ5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEzLjI4MzYgMTcuNjYxNVYxMi44NDA4TDE3LjE0MDEgMTUuMjUxMkwxMy4yODM2IDE3LjY2MTVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS4xMDI3IDAuMzA3MTI5QzcuMTE1NTggMC4zMDcxMjkgMC42NDA3NDcgNi43ODE5NiAwLjY0MDc0NyAxNC43NjkxQzAuNjQwNzQ3IDIyLjc1NjIgNy4xMTU1OCAyOS4yMzEgMTUuMTAyNyAyOS4yMzFDMjMuMDg5OCAyOS4yMzEgMjkuNTY0NiAyMi43NTYyIDI5LjU2NDYgMTQuNzY5MUMyOS41NjQ2IDYuNzgxOTYgMjMuMDg5OCAwLjMwNzEyOSAxNS4xMDI3IDAuMzA3MTI5Wk0xNC42OTk5IDEyLjU2MjNMMTQuNjY5NSAxMi4wNjE5QzE0LjU3ODUgMTAuNzY0OSAxNS4zNzc2IDkuNTgwMjYgMTYuNjQyMSA5LjEyMDdDMTcuMTA3NCA4Ljk1NzI5IDE3Ljg5NjUgOC45MzY4NyAxOC40MTI0IDkuMDc5ODVDMTguNjE0NyA5LjE0MTEyIDE4Ljk5OTEgOS4zNDUzNyAxOS4yNzIyIDkuNTI5MkwxOS43Njc5IDkuODY2MjFMMjAuMzE0MSA5LjY5MjZDMjAuNjE3NiA5LjYwMDY5IDIxLjAyMjMgOS40NDc1IDIxLjIwNDMgOS4zNDUzN0MyMS4zNzYzIDkuMjUzNDYgMjEuNTI4IDkuMjAyNCAyMS41MjggOS4yMzMwM0MyMS41MjggOS40MDY2NSAyMS4xNTM4IDkuOTk4OTggMjAuODQwMiAxMC4zMjU4QzIwLjQxNTMgMTAuNzg1MyAyMC41MzY3IDEwLjgyNjIgMjEuMzk2NSAxMC41MTk4QzIxLjkxMjQgMTAuMzQ2MiAyMS45MjI2IDEwLjM0NjIgMjEuODIxNCAxMC41NDAyQzIxLjc2MDcgMTAuNjQyNCAyMS40NDcxIDEwLjk5OTggMjEuMTEzMyAxMS4zMjY2QzIwLjU0NjggMTEuODg4MyAyMC41MTY1IDExLjk0OTYgMjAuNTE2NSAxMi40MTk0QzIwLjUxNjUgMTMuMTQ0NCAyMC4xNzI1IDE0LjY1NTkgMTkuODI4NiAxNS40ODMxQzE5LjE5MTMgMTcuMDM1NCAxNy44MjU3IDE4LjYzODggMTYuNDYgMTkuNDQ1NkMxNC41MzggMjAuNTc5MiAxMS45Nzg3IDIwLjg2NTEgOS44MjQwMyAyMC4yMDEzQzkuMTA1ODEgMTkuOTc2NyA3Ljg3MTY4IDE5LjQwNDcgNy44NzE2OCAxOS4zMDI2QzcuODcxNjggMTkuMjcyIDguMjQ1OTcgMTkuMjMxMSA4LjcwMTE4IDE5LjIyMDlDOS42NTIwNyAxOS4yMDA1IDEwLjYwMyAxOC45MzUgMTEuNDEyMiAxOC40NjUyTDExLjk1ODUgMTguMTM4NEwxMS4zMzEzIDE3LjkyMzlDMTAuNDQxMSAxNy42MTc1IDkuNjQxOTUgMTYuOTEyOSA5LjQzOTYzIDE2LjI0OTFDOS4zNzg5NCAxNi4wMzQ2IDkuMzk5MTcgMTYuMDI0NCA5Ljk2NTY2IDE2LjAyNDRMMTAuNTUyNCAxNi4wMTQyTDEwLjA1NjcgMTUuNzc5M0M5LjQ2OTk4IDE1LjQ4MzEgOC45MzM4NCAxNC45ODI3IDguNjcwODMgMTQuNDcyMUM4LjQ3ODYzIDE0LjEwNDQgOC4yMzU4NSAxMy4xNzUxIDguMzA2NjYgMTMuMTAzNkM4LjMyNjg5IDEzLjA3MyA4LjUzOTMyIDEzLjEzNDIgOC43ODIxIDEzLjIxNTlDOS40ODAxIDEzLjQ3MTIgOS41NzExNCAxMy40MSA5LjE2NjUgMTIuOTgxQzguNDA3ODIgMTIuMjA0OSA4LjE3NTE1IDExLjA1MDkgOC41MzkzMiA5Ljk1ODEzTDguNzExMjkgOS40Njc5Mkw5LjM3ODk0IDEwLjEzMTdDMTAuNzQ0NiAxMS40Njk2IDEyLjM1MyAxMi4yNjYyIDE0LjE5NDEgMTIuNTAxMUwxNC42OTk5IDEyLjU2MjNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAyOSAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC40NzU2IDAuMzA3MTI5QzYuNDg4NSAwLjMwNzEyOSAwLjAxMzY3MTkgNi43ODE5NiAwLjAxMzY3MTkgMTQuNzY5MUMwLjAxMzY3MTkgMjIuNzU2MiA2LjQ4ODUgMjkuMjMxIDE0LjQ3NTYgMjkuMjMxQzIyLjQ2MjcgMjkuMjMxIDI4LjkzNzUgMjIuNzU2MiAyOC45Mzc1IDE0Ljc2OTFDMjguOTM3NSA2Ljc4MTk2IDIyLjQ2MjcgMC4zMDcxMjkgMTQuNDc1NiAwLjMwNzEyOVpNMTEuMjk2IDcuMTAyNTZDMTIuMTE4NyA3LjA2NTExIDEyLjM4MTYgNy4wNTU5NiAxNC40NzY0IDcuMDU1OTZIMTQuNDczOUMxNi41NjkzIDcuMDU1OTYgMTYuODMxMyA3LjA2NTExIDE3LjY1NCA3LjEwMjU2QzE4LjQ3NTEgNy4xNDAxNiAxOS4wMzU5IDcuMjcwMTYgMTkuNTI3NiA3LjQ2MDg5QzIwLjAzNTQgNy42NTc3NCAyMC40NjQ1IDcuOTIxMjcgMjAuODkzNSA4LjM1MDMxQzIxLjMyMjUgOC43NzkwMyAyMS41ODYxIDkuMjA5MzYgMjEuNzgzNyA5LjcxNjY2QzIxLjk3MzMgMTAuMjA3MSAyMi4xMDM1IDEwLjc2NzYgMjIuMTQyMSAxMS41ODg3QzIyLjE3OSAxMi40MTE0IDIyLjE4ODcgMTIuNjc0MyAyMi4xODg3IDE0Ljc2OTFDMjIuMTg4NyAxNi44NjM4IDIyLjE3OSAxNy4xMjYxIDIyLjE0MjEgMTcuOTQ4OEMyMi4xMDM1IDE4Ljc2OTYgMjEuOTczMyAxOS4zMzAzIDIxLjc4MzcgMTkuODIwOEMyMS41ODYxIDIwLjMyOCAyMS4zMjI1IDIwLjc1ODMgMjAuODkzNSAyMS4xODdDMjAuNDY0OSAyMS42MTYxIDIwLjAzNTMgMjEuODgwMiAxOS41MjgxIDIyLjA3NzJDMTkuMDM3NCAyMi4yNjggMTguNDc2MiAyMi4zOTggMTcuNjU1MSAyMi40MzU2QzE2LjgzMjQgMjIuNDczIDE2LjU3MDMgMjIuNDgyMiAxNC40NzU0IDIyLjQ4MjJDMTIuMzgwOCAyMi40ODIyIDEyLjExODEgMjIuNDczIDExLjI5NTMgMjIuNDM1NkMxMC40NzQ0IDIyLjM5OCA5LjkxMzczIDIyLjI2OCA5LjQyMjk4IDIyLjA3NzJDOC45MTYgMjEuODgwMiA4LjQ4NTY3IDIxLjYxNjEgOC4wNTcxMSAyMS4xODdDNy42MjgyMyAyMC43NTgzIDcuMzY0NyAyMC4zMjggNy4xNjc1MyAxOS44MjA3QzYuOTc2OTYgMTkuMzMwMyA2Ljg0Njk2IDE4Ljc2OTggNi44MDkyIDE3Ljk0ODZDNi43NzE5MiAxNy4xMjU5IDYuNzYyNiAxNi44NjM4IDYuNzYyNiAxNC43NjkxQzYuNzYyNiAxMi42NzQzIDYuNzcyMjQgMTIuNDExMyA2LjgwOTA0IDExLjU4ODVDNi44NDU5OSAxMC43Njc3IDYuOTc2MTUgMTAuMjA3MSA3LjE2NzM3IDkuNzE2NUM3LjM2NTAyIDkuMjA5MzYgNy42Mjg1NSA4Ljc3OTAzIDguMDU3NiA4LjM1MDMxQzguNDg2MzIgNy45MjE0MyA4LjkxNjY0IDcuNjU3OSA5LjQyMzk0IDcuNDYwODlDOS45MTQzNyA3LjI3MDE2IDEwLjQ3NDkgNy4xNDAxNiAxMS4yOTYgNy4xMDI1NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNzg0NCA4LjQ0NjI2QzEzLjkxODggOC40NDYwNSAxNC4wNjMzIDguNDQ2MTIgMTQuMjE5MyA4LjQ0NjE5TDE0LjQ3NjMgOC40NDYyNkMxNi41MzU3IDguNDQ2MjYgMTYuNzc5OCA4LjQ1MzY2IDE3LjU5MzEgOC40OTA2MUMxOC4zNDUxIDguNTI1IDE4Ljc1MzMgOC42NTA2NiAxOS4wMjUyIDguNzU2MjRDMTkuMzg1MSA4Ljg5NjA0IDE5LjY0MTcgOS4wNjMxNSAxOS45MTE1IDkuMzMzMTFDMjAuMTgxNSA5LjYwMzA3IDIwLjM0ODYgOS44NjAxNyAyMC40ODg3IDEwLjIyMDFDMjAuNTk0MyAxMC40OTE3IDIwLjcyMDEgMTAuODk5OCAyMC43NTQzIDExLjY1MTlDMjAuNzkxMyAxMi40NjUgMjAuNzk5MyAxMi43MDkyIDIwLjc5OTMgMTQuNzY3NkMyMC43OTkzIDE2LjgyNjEgMjAuNzkxMyAxNy4wNzAzIDIwLjc1NDMgMTcuODgzNEMyMC43MiAxOC42MzU0IDIwLjU5NDMgMTkuMDQzNiAyMC40ODg3IDE5LjMxNTJDMjAuMzQ4OSAxOS42NzUxIDIwLjE4MTUgMTkuOTMxNCAxOS45MTE1IDIwLjIwMTJDMTkuNjQxNiAyMC40NzEyIDE5LjM4NTMgMjAuNjM4MyAxOS4wMjUyIDIwLjc3ODFDMTguNzUzNiAyMC44ODQxIDE4LjM0NTEgMjEuMDA5NSAxNy41OTMxIDIxLjA0MzlDMTYuNzggMjEuMDgwOCAxNi41MzU3IDIxLjA4ODkgMTQuNDc2MyAyMS4wODg5QzEyLjQxNjggMjEuMDg4OSAxMi4xNzI3IDIxLjA4MDggMTEuMzU5NiAyMS4wNDM5QzEwLjYwNzYgMjEuMDA5MiAxMC4xOTk0IDIwLjg4MzUgOS45MjczOCAyMC43Nzc5QzkuNTY3NDMgMjAuNjM4MSA5LjMxMDMzIDIwLjQ3MSA5LjA0MDM3IDIwLjIwMTFDOC43NzA0MSAxOS45MzExIDguNjAzMjkgMTkuNjc0NiA4LjQ2MzE3IDE5LjMxNDVDOC4zNTc2IDE5LjA0MyA4LjIzMTc4IDE4LjYzNDggOC4xOTc1NSAxNy44ODI4QzguMTYwNTkgMTcuMDY5NyA4LjE1MzIgMTYuODI1NCA4LjE1MzIgMTQuNzY1N0M4LjE1MzIgMTIuNzA2IDguMTYwNTkgMTIuNDYzIDguMTk3NTUgMTEuNjQ5OUM4LjIzMTk0IDEwLjg5NzkgOC4zNTc2IDEwLjQ4OTggOC40NjMxNyAxMC4yMTc5QzguNjAyOTcgOS44NTc5MiA4Ljc3MDQxIDkuNjAwODIgOS4wNDAzNyA5LjMzMDg2QzkuMzEwMzMgOS4wNjA5IDkuNTY3NDMgOC44OTM3OSA5LjkyNzM4IDguNzUzNjZDMTAuMTk5MyA4LjY0NzYxIDEwLjYwNzYgOC41MjIyNyAxMS4zNTk2IDguNDg3NzJDMTIuMDcxMSA4LjQ1NTU4IDEyLjM0NjkgOC40NDU5NCAxMy43ODQ0IDguNDQ0MzRWOC40NDYyNlpNMTguNTkzNSA5LjcyN0MxOC4wODI1IDkuNzI3IDE3LjY2OCAxMC4xNDExIDE3LjY2OCAxMC42NTIzQzE3LjY2OCAxMS4xNjMyIDE4LjA4MjUgMTEuNTc3OCAxOC41OTM1IDExLjU3NzhDMTkuMTA0NSAxMS41Nzc4IDE5LjUxOTEgMTEuMTYzMiAxOS41MTkxIDEwLjY1MjNDMTkuNTE5MSAxMC4xNDEzIDE5LjEwNDUgOS43MjY2OCAxOC41OTM1IDkuNzI2NjhWOS43MjdaTTEwLjUxNTMgMTQuNzY5NEMxMC41MTUzIDEyLjU4MiAxMi4yODg4IDEwLjgwODUgMTQuNDc2MiAxMC44MDg0QzE2LjY2MzcgMTAuODA4NCAxOC40MzY3IDEyLjU4MTkgMTguNDM2NyAxNC43Njk0QzE4LjQzNjcgMTYuOTU2OCAxNi42NjM4IDE4LjcyOTYgMTQuNDc2MyAxOC43Mjk2QzEyLjI4ODkgMTguNzI5NiAxMC41MTUzIDE2Ljk1NjggMTAuNTE1MyAxNC43Njk0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE0LjQ3NjMgMTIuMTk4MkMxNS44OTYyIDEyLjE5ODIgMTcuMDQ3MyAxMy4zNDkzIDE3LjA0NzMgMTQuNzY5M0MxNy4wNDczIDE2LjE4OTEgMTUuODk2MiAxNy4zNDAzIDE0LjQ3NjMgMTcuMzQwM0MxMy4wNTYzIDE3LjM0MDMgMTEuOTA1MyAxNi4xODkxIDExLjkwNTMgMTQuNzY5M0MxMS45MDUzIDEzLjM0OTMgMTMuMDU2MyAxMi4xOTgyIDE0LjQ3NjMgMTIuMTk4MloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAyOSAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC40NzU2IDAuMzA3MTI5QzYuNDg4NSAwLjMwNzEyOSAwLjAxMzY3MTkgNi43ODE5NiAwLjAxMzY3MTkgMTQuNzY5MUMwLjAxMzY3MTkgMjIuNzU2MiA2LjQ4ODUgMjkuMjMxIDE0LjQ3NTYgMjkuMjMxQzIyLjQ2MjcgMjkuMjMxIDI4LjkzNzUgMjIuNzU2MiAyOC45Mzc1IDE0Ljc2OTFDMjguOTM3NSA2Ljc4MTk2IDIyLjQ2MjcgMC4zMDcxMjkgMTQuNDc1NiAwLjMwNzEyOVpNMTEuMjk2IDcuMTAyNTZDMTIuMTE4NyA3LjA2NTExIDEyLjM4MTYgNy4wNTU5NiAxNC40NzY0IDcuMDU1OTZIMTQuNDczOUMxNi41NjkzIDcuMDU1OTYgMTYuODMxMyA3LjA2NTExIDE3LjY1NCA3LjEwMjU2QzE4LjQ3NTEgNy4xNDAxNiAxOS4wMzU5IDcuMjcwMTYgMTkuNTI3NiA3LjQ2MDg5QzIwLjAzNTQgNy42NTc3NCAyMC40NjQ1IDcuOTIxMjcgMjAuODkzNSA4LjM1MDMxQzIxLjMyMjUgOC43NzkwMyAyMS41ODYxIDkuMjA5MzYgMjEuNzgzNyA5LjcxNjY2QzIxLjk3MzMgMTAuMjA3MSAyMi4xMDM1IDEwLjc2NzYgMjIuMTQyMSAxMS41ODg3QzIyLjE3OSAxMi40MTE0IDIyLjE4ODcgMTIuNjc0MyAyMi4xODg3IDE0Ljc2OTFDMjIuMTg4NyAxNi44NjM4IDIyLjE3OSAxNy4xMjYxIDIyLjE0MjEgMTcuOTQ4OEMyMi4xMDM1IDE4Ljc2OTYgMjEuOTczMyAxOS4zMzAzIDIxLjc4MzcgMTkuODIwOEMyMS41ODYxIDIwLjMyOCAyMS4zMjI1IDIwLjc1ODMgMjAuODkzNSAyMS4xODdDMjAuNDY0OSAyMS42MTYxIDIwLjAzNTMgMjEuODgwMiAxOS41MjgxIDIyLjA3NzJDMTkuMDM3NCAyMi4yNjggMTguNDc2MiAyMi4zOTggMTcuNjU1MSAyMi40MzU2QzE2LjgzMjQgMjIuNDczIDE2LjU3MDMgMjIuNDgyMiAxNC40NzU0IDIyLjQ4MjJDMTIuMzgwOCAyMi40ODIyIDEyLjExODEgMjIuNDczIDExLjI5NTMgMjIuNDM1NkMxMC40NzQ0IDIyLjM5OCA5LjkxMzczIDIyLjI2OCA5LjQyMjk4IDIyLjA3NzJDOC45MTYgMjEuODgwMiA4LjQ4NTY3IDIxLjYxNjEgOC4wNTcxMSAyMS4xODdDNy42MjgyMyAyMC43NTgzIDcuMzY0NyAyMC4zMjggNy4xNjc1MyAxOS44MjA3QzYuOTc2OTYgMTkuMzMwMyA2Ljg0Njk2IDE4Ljc2OTggNi44MDkyIDE3Ljk0ODZDNi43NzE5MiAxNy4xMjU5IDYuNzYyNiAxNi44NjM4IDYuNzYyNiAxNC43NjkxQzYuNzYyNiAxMi42NzQzIDYuNzcyMjQgMTIuNDExMyA2LjgwOTA0IDExLjU4ODVDNi44NDU5OSAxMC43Njc3IDYuOTc2MTUgMTAuMjA3MSA3LjE2NzM3IDkuNzE2NUM3LjM2NTAyIDkuMjA5MzYgNy42Mjg1NSA4Ljc3OTAzIDguMDU3NiA4LjM1MDMxQzguNDg2MzIgNy45MjE0MyA4LjkxNjY0IDcuNjU3OSA5LjQyMzk0IDcuNDYwODlDOS45MTQzNyA3LjI3MDE2IDEwLjQ3NDkgNy4xNDAxNiAxMS4yOTYgNy4xMDI1NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNzg0NCA4LjQ0NjI2QzEzLjkxODggOC40NDYwNSAxNC4wNjMzIDguNDQ2MTIgMTQuMjE5MyA4LjQ0NjE5TDE0LjQ3NjMgOC40NDYyNkMxNi41MzU3IDguNDQ2MjYgMTYuNzc5OCA4LjQ1MzY2IDE3LjU5MzEgOC40OTA2MUMxOC4zNDUxIDguNTI1IDE4Ljc1MzMgOC42NTA2NiAxOS4wMjUyIDguNzU2MjRDMTkuMzg1MSA4Ljg5NjA0IDE5LjY0MTcgOS4wNjMxNSAxOS45MTE1IDkuMzMzMTFDMjAuMTgxNSA5LjYwMzA3IDIwLjM0ODYgOS44NjAxNyAyMC40ODg3IDEwLjIyMDFDMjAuNTk0MyAxMC40OTE3IDIwLjcyMDEgMTAuODk5OCAyMC43NTQzIDExLjY1MTlDMjAuNzkxMyAxMi40NjUgMjAuNzk5MyAxMi43MDkyIDIwLjc5OTMgMTQuNzY3NkMyMC43OTkzIDE2LjgyNjEgMjAuNzkxMyAxNy4wNzAzIDIwLjc1NDMgMTcuODgzNEMyMC43MiAxOC42MzU0IDIwLjU5NDMgMTkuMDQzNiAyMC40ODg3IDE5LjMxNTJDMjAuMzQ4OSAxOS42NzUxIDIwLjE4MTUgMTkuOTMxNCAxOS45MTE1IDIwLjIwMTJDMTkuNjQxNiAyMC40NzEyIDE5LjM4NTMgMjAuNjM4MyAxOS4wMjUyIDIwLjc3ODFDMTguNzUzNiAyMC44ODQxIDE4LjM0NTEgMjEuMDA5NSAxNy41OTMxIDIxLjA0MzlDMTYuNzggMjEuMDgwOCAxNi41MzU3IDIxLjA4ODkgMTQuNDc2MyAyMS4wODg5QzEyLjQxNjggMjEuMDg4OSAxMi4xNzI3IDIxLjA4MDggMTEuMzU5NiAyMS4wNDM5QzEwLjYwNzYgMjEuMDA5MiAxMC4xOTk0IDIwLjg4MzUgOS45MjczOCAyMC43Nzc5QzkuNTY3NDMgMjAuNjM4MSA5LjMxMDMzIDIwLjQ3MSA5LjA0MDM3IDIwLjIwMTFDOC43NzA0MSAxOS45MzExIDguNjAzMjkgMTkuNjc0NiA4LjQ2MzE3IDE5LjMxNDVDOC4zNTc2IDE5LjA0MyA4LjIzMTc4IDE4LjYzNDggOC4xOTc1NSAxNy44ODI4QzguMTYwNTkgMTcuMDY5NyA4LjE1MzIgMTYuODI1NCA4LjE1MzIgMTQuNzY1N0M4LjE1MzIgMTIuNzA2IDguMTYwNTkgMTIuNDYzIDguMTk3NTUgMTEuNjQ5OUM4LjIzMTk0IDEwLjg5NzkgOC4zNTc2IDEwLjQ4OTggOC40NjMxNyAxMC4yMTc5QzguNjAyOTcgOS44NTc5MiA4Ljc3MDQxIDkuNjAwODIgOS4wNDAzNyA5LjMzMDg2QzkuMzEwMzMgOS4wNjA5IDkuNTY3NDMgOC44OTM3OSA5LjkyNzM4IDguNzUzNjZDMTAuMTk5MyA4LjY0NzYxIDEwLjYwNzYgOC41MjIyNyAxMS4zNTk2IDguNDg3NzJDMTIuMDcxMSA4LjQ1NTU4IDEyLjM0NjkgOC40NDU5NCAxMy43ODQ0IDguNDQ0MzRWOC40NDYyNlpNMTguNTkzNSA5LjcyN0MxOC4wODI1IDkuNzI3IDE3LjY2OCAxMC4xNDExIDE3LjY2OCAxMC42NTIzQzE3LjY2OCAxMS4xNjMyIDE4LjA4MjUgMTEuNTc3OCAxOC41OTM1IDExLjU3NzhDMTkuMTA0NSAxMS41Nzc4IDE5LjUxOTEgMTEuMTYzMiAxOS41MTkxIDEwLjY1MjNDMTkuNTE5MSAxMC4xNDEzIDE5LjEwNDUgOS43MjY2OCAxOC41OTM1IDkuNzI2NjhWOS43MjdaTTEwLjUxNTMgMTQuNzY5NEMxMC41MTUzIDEyLjU4MiAxMi4yODg4IDEwLjgwODUgMTQuNDc2MiAxMC44MDg0QzE2LjY2MzcgMTAuODA4NCAxOC40MzY3IDEyLjU4MTkgMTguNDM2NyAxNC43Njk0QzE4LjQzNjcgMTYuOTU2OCAxNi42NjM4IDE4LjcyOTYgMTQuNDc2MyAxOC43Mjk2QzEyLjI4ODkgMTguNzI5NiAxMC41MTUzIDE2Ljk1NjggMTAuNTE1MyAxNC43Njk0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE0LjQ3NjMgMTIuMTk4MkMxNS44OTYyIDEyLjE5ODIgMTcuMDQ3MyAxMy4zNDkzIDE3LjA0NzMgMTQuNzY5M0MxNy4wNDczIDE2LjE4OTEgMTUuODk2MiAxNy4zNDAzIDE0LjQ3NjMgMTcuMzQwM0MxMy4wNTYzIDE3LjM0MDMgMTEuOTA1MyAxNi4xODkxIDExLjkwNTMgMTQuNzY5M0MxMS45MDUzIDEzLjM0OTMgMTMuMDU2MyAxMi4xOTgyIDE0LjQ3NjMgMTIuMTk4MloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=',
  ];

  const legalLinks = [
    'Licensing',
    'CA Residents',
    'Terms of Use',
    'CA: Do Not Sell My Personal Info',
    'Participation Terms',
    'Sitemap',
  ];

  return (
    <div id="footer-section">
      <div id="footer-content">
        <div id="footer-logo-trademark">
          <TenXLogo />
          <span>Exponentially better.</span>
          <span>© 2022 CoStar Group</span>
        </div>

        <div id="list1-property-types">
          {footerList1.map((listItem) => {
            return <a href="">{listItem} </a>;
          })}
        </div>

        <div id="list2">
          {footerList2.map((listItem) => {
            return <a href="">{listItem} </a>;
          })}
        </div>

        <div id="list3-pages">
          {footerList3.map((listItem) => {
            return <a href="">{listItem} </a>;
          })}
        </div>

        <div id="list4-contact-info">
          {footerList4.map((listItem) => {
            return <a href="">{listItem} </a>;
          })}
        </div>
      </div>
      <div id="social-media-links">
        {socialMediaIconLinkAddresses.map((icon, index) => {
          return (
            <a href={icon} target="blank">
              <img src={socialMediaImageSrcLinks[index]} alt="" />
            </a>
          );
        })}
      </div>
      <div id="bottom-links">
        {legalLinks.map((listItem) => {
          return <a href="">{listItem} </a>;
        })}
      </div>
    </div>
  );
}

export default Footer;
