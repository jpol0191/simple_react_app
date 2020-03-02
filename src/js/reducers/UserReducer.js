/* eslint-disable require-jsdoc */
export default function reducer(
    state={
      user: {
        profilePicture: 'https://www.pikpng.com/pngl/b/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png',
        displayName: 'User1',
        appointments: [
          {
            id: 1,
            date: '04/10/20',
            time: '3:00PM EST',
            doctor: {
              name: 'Dr Who',
              specialty: 'Time Travel',
              profilePicture: 'https://www.pikpng.com/pngl/b/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png',
              education: 'Mars College',
            },
            location: {
              name: 'OverLook Hospital',
              type: 'HOSPITAL',
              address: '123 Peach Tree Ave',
            },
          },
          {
            id: 2,
            date: '04/10/20',
            time: '4:00PM EST',
            doctor: {
              name: 'Dr Who',
              specialty: 'Time Travel',
              profilePicture: 'https://www.pikpng.com/pngl/b/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png',
              education: 'Mars College',
            },
            location: {
              name: 'OverLook Hospital',
              type: 'HOSPITAL',
              address: '123 Peach Tree Ave',
            },
          },
          {
            id: 3,
            date: '04/10/20',
            time: '5:00PM EST',
            doctor: {
              name: 'Dr Who',
              specialty: 'Time Travel',
              profilePicture: 'https://www.pikpng.com/pngl/b/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png',
              education: 'Mars College',
            },
            location: {
              name: 'OverLook Hospital',
              type: 'HOSPITAL',
              address: '123 Peach Tree Ave',
            },
          },
        ],
      },
    }, action) {
  return state;
}
