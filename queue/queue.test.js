const Queue = require("./queue");

describe("Queue", () => {
  test("should enqueue / dequeue all the songs", () => {
    const queuePlayList = new Queue();

    const song_1 = { name: "All Eyez on Me", time: "3 min" };
    const song_2 = { name: "Changes", time: "3.4 min" };
    const song_3 = { name: "Me And My Girlfriend", time: "2.4 min" };
    const song_4 = { name: "Keep Ya Head Up", time: "3.1 min" };

    queuePlayList.enqueue(song_1);
    queuePlayList.enqueue(song_2);
    queuePlayList.enqueue(song_3);
    queuePlayList.enqueue(song_4);

    expect(queuePlayList.length()).toEqual(4);
    
    expect(queuePlayList.peek()).toEqual(song_1);

    expect(queuePlayList.dequeue()).toEqual(song_1);
    expect(queuePlayList.dequeue()).toEqual(song_2);
    expect(queuePlayList.dequeue()).toEqual(song_3);
    expect(queuePlayList.dequeue()).toEqual(song_4);

    expect(queuePlayList.length()).toEqual(0);
  });
});
