import React, { Component } from 'react'
import {} from 'react-router-dom'
import { GET_COMMENTS_BY_ELEMENT_ID } from '../services/comments.service'
import {
  GET_MOVIES_BY_SEARCH,
  GET_MOVIE_BY_ID
} from '../services/movies.service'

export default class DetailsPage extends Component {
  state = {
    details: {},
    comments: []
  }

  async componentDidMount() {
    const movie_id = this.props.match.params.id
    const movie = await GET_MOVIE_BY_ID(movie_id)
    const comments = await GET_COMMENTS_BY_ELEMENT_ID(movie_id)
    console.log(movie)
    console.log(comments)
  }
  render() {
    console.log(this.props.match.params.id)
    return (
      <div>
        <h3>Working</h3>
      </div>
    )
  }
}
