module.exports = (mongoose) => {
    const contacts = mongoose.model(
      'contact',
      mongoose.Schema(
        {
          first_name: String,
          last_name: String,
          email: String,
          favorite_color: Boolean,
          birthday: Date
        },
        { timestamps: true }
      )
    );
  
    return contacts;
  };