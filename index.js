const APIURL = 'https://api.github.com/users/'
const data = await axios('link');
const imgTag = document.getElementById('git-user-id');
imgTag.setAttribute('src', data.avatar_url);

getUser('zorocubing')


async function getUser(username) {
  try {
    const {
      data
    } = await axios(APIURL + username)

    console.log(data)
  } catch (err) {
    console.log(err)

 } 
}