function addtoCast(id, name, city) {
  if (!roster.some(member => member.id === id)) {
    roster.push({ id, name, city });
    updateRosterUI();
  }
}

export default addtoCast