import * as React from "react"
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

export function SettingsIcon(props){
    return(

  <Svg
    {...props}
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M13.639 3.375c.727-3 4.995-3 5.723 0a2.945 2.945 0 0 0 4.395 1.821c2.636-1.606 5.655 1.411 4.049 4.049a2.944 2.944 0 0 0 1.82 4.394c2.999.727 2.999 4.995 0 5.723a2.945 2.945 0 0 0-1.822 4.395c1.606 2.636-1.411 5.655-4.049 4.049a2.944 2.944 0 0 0-4.393 1.82c-.728 2.999-4.996 2.999-5.723 0a2.945 2.945 0 0 0-4.396-1.822c-2.636 1.606-5.655-1.411-4.049-4.049a2.945 2.945 0 0 0-1.82-4.393c-2.999-.728-2.999-4.996 0-5.723a2.945 2.945 0 0 0 1.822-4.396C3.59 6.607 6.607 3.588 9.245 5.194c1.701 1.039 3.922.12 4.394-1.82Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.625 16.5a5.125 5.125 0 1 1-10.25 0 5.125 5.125 0 0 1 10.25 0v0Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
    )
}



export function BackIcon(props)  {
  return(
  <Svg
    {...props}
    width={11}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M9.75 18.75 1 10l8.75-8.75"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )

}




export const AddIcon = (props) => (
  <Svg
    {...props}
    width={56}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M28 19.25V28v-8.75ZM28 28v8.75V28Zm0 0h8.75H28Zm0 0h-8.75H28Zm26.25 0a26.25 26.25 0 1 1-52.5 0 26.25 26.25 0 0 1 52.5 0Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export  function CancelIcon(props:any){
  return (
    <Svg
      width={30}
      height={30}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="m7.5 7.5 15 15m-15 0 15-15-15 15Z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function FacebookIcon(props:any){
  return (
    <Svg
      {...props}
      width={48}
      height={48}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24Z"
        fill="#1877F2"
      />
    </Svg>
  );
}

export function GoogleIcon(props:any){
  return(
    <Svg
    {...props}
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G clipPath="url(#a)">
      <Path
        d="M47.532 24.553c0-1.632-.132-3.272-.414-4.877H24.48v9.242h12.963a11.109 11.109 0 0 1-4.797 7.293v5.997h7.734c4.542-4.18 7.152-10.353 7.152-17.655Z"
        fill="#4285F4"
      />
      <Path
        d="M24.48 48.002c6.473 0 11.932-2.126 15.909-5.794l-7.734-5.997c-2.152 1.464-4.93 2.293-8.166 2.293-6.262 0-11.57-4.224-13.475-9.903H3.033v6.181a24.003 24.003 0 0 0 21.447 13.22Z"
        fill="#34A853"
      />
      <Path
        d="M11.005 28.6a14.375 14.375 0 0 1 0-9.189V13.23H3.033a24.02 24.02 0 0 0 0 21.553l7.972-6.182Z"
        fill="#FBBC04"
      />
      <Path
        d="M24.48 9.5a13.042 13.042 0 0 1 9.207 3.597l6.852-6.852A23.066 23.066 0 0 0 24.48.002 23.995 23.995 0 0 0 3.033 13.23l7.972 6.181C12.901 13.724 18.219 9.5 24.48 9.5Z"
        fill="#EA4335"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
  )
}


export function TwitterIcon(props:any){
  return(
    <Svg
    {...props}
    width={48}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M15.095 39.501c18.113 0 28.02-15.006 28.02-28.02 0-.426 0-.85-.028-1.273A20.036 20.036 0 0 0 48 5.11a19.63 19.63 0 0 1-5.656 1.55 9.88 9.88 0 0 0 4.33-5.447 19.73 19.73 0 0 1-6.254 2.39 9.857 9.857 0 0 0-16.783 8.982A27.96 27.96 0 0 1 3.341 2.295 9.855 9.855 0 0 0 6.39 15.443a9.761 9.761 0 0 1-4.47-1.233v.125a9.851 9.851 0 0 0 7.9 9.654 9.832 9.832 0 0 1-4.446.169 9.861 9.861 0 0 0 9.2 6.839A19.759 19.759 0 0 1 0 35.078a27.883 27.883 0 0 0 15.095 4.416"
      fill="#1DA1F2"
    />
  </Svg>
)
}

export function HomeIcon(props: any) {
  return (
      <Svg
        width={20}
        height={20}
        xmlns="http://www.w3.org/2000/svg"
        className="prefix__h-5 prefix__w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        {...props}>
        <Path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </Svg>
  );
}


export function SearchIcon(props:any){
  return (
    <Svg
      {...props}
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor">
      <Path
        fillRule="evenodd"
        d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM2 8a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 2 8z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export function CartIcon(props:any){
  return (
    <Svg
      {...props}
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
      />
    </Svg>
  );
}

export function SettingIcon(props:any){
  return (
    <Svg
      {...props}
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
      />
    </Svg>
  );
}

export function DeleteIcon(props:any){
  return (
  
  <Svg

    {...props}
    width={24}
    height={24}
    color="black"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19 7-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3M4 7h16"
    />
  </Svg>
  );
}