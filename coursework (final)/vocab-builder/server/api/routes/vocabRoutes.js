const vocabBuilder = require('../controllers/vocabController');

module.exports = app => {
    // Route for listing all words and creating a new word
    app
        .route('/words')
        .get(vocabBuilder.list_all_words) // GET /words: returns a list of all words [cite: 349]
        .post(vocabBuilder.create_a_word); // POST /words: creates a new word [cite: 350]

    // Route for single word operations using the word ID
    app
        .route('/words/:wordId')
        .get(vocabBuilder.read_a_word) // GET /words/:wordId: gets a single word [cite: 351]
        .put(vocabBuilder.update_a_word) // PUT /words/:wordId: updates a single word [cite: 353]
        .delete(vocabBuilder.delete_a_word); // DELETE /words/:wordId: deletes a single word [cite: 354]
};