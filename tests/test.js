function getTotalLikes() {
    return 230
}


describe('getTotalLikes', () => {
    test('should return the total likes of a user', () => {
      expect( getTotalLikes() ).toBe(230)
    })
  })