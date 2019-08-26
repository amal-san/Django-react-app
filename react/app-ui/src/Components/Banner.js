import React from 'react'


class Banner extends React.Component {
    render(){
        return (
            <>
            <div className="ui yellow raised segment" style={{borderBottom:'0'}}>
            <div className='ui header'> Rick and Morty</div>
            <p>Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block Adult Swim. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.</p>
            </div>
            </>
        )
    }
}

export default Banner