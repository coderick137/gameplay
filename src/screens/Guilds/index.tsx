import { FlatList, View } from "react-native";
import { styles } from "./styles";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  const guids = [
    {
      id: "1",
      name: "Lendários",
      icon: null,
      owner: true,
    }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guids}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild
            data={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentred />}
        contentContainerStyle={{
          paddingBottom: 68,
          paddingTop: 103,
        }}
        ListHeaderComponent={() => <ListDivider isCentred />}
        style={styles.guilds}
      />
    </View>
  );
}